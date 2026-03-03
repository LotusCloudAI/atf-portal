require("dotenv").config();

const { setGlobalOptions } = require("firebase-functions/v2");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const admin = require("firebase-admin");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({ maxInstances: 10 });

const app = express();

/*
==================================================
CORS
==================================================
*/
app.use(cors({ origin: true }));

/*
==================================================
STRIPE WEBHOOK (MUST BE FIRST)
==================================================
*/
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      logger.error("Webhook signature failed", err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const { userId, type } = session.metadata || {};

        if (type === "membership") {
          await db.collection("memberships").doc(userId).set(
            {
              stripeCustomerId: session.customer,
              subscriptionId: session.subscription || null,
              status: "active",
              activatedAt: admin.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );

          logger.info("Membership activated:", userId);
        }

        if (type === "donation") {
          await db.collection("donations").add({
            email: session.customer_email,
            amount: session.amount_total / 100,
            currency: session.currency,
            stripePaymentIntent: session.payment_intent,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });

          logger.info("Donation recorded:", session.customer_email);
        }
      }

      res.json({ received: true });
    } catch (error) {
      logger.error("Webhook processing error", error);
      res.status(500).send("Webhook handler failed");
    }
  }
);

/*
==================================================
CREATE MEMBERSHIP CHECKOUT SESSION
==================================================
*/
app.post("/createMembershipSession", express.json(), async (req, res) => {
  try {
    const { priceId, userId, email } = req.body;

    if (!priceId || !userId || !email) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "https://yourdomain.org/payment-success",
      cancel_url: "https://yourdomain.org/payment-cancel",
      metadata: {
        userId,
        type: "membership",
      },
    });

    return res.json({ url: session.url });
  } catch (error) {
    logger.error("Membership session error", error);
    return res.status(500).json({ error: "Stripe error" });
  }
});

/*
==================================================
CREATE DONATION CHECKOUT SESSION
==================================================
*/
app.post("/createDonationSession", express.json(), async (req, res) => {
  try {
    const { amount, email, userId } = req.body;

    if (!amount || amount < 1) {
      return res.status(400).json({ error: "Invalid donation amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "ATF Donation" },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: "https://yourdomain.org/payment-success",
      cancel_url: "https://yourdomain.org/payment-cancel",
      metadata: {
        userId: userId || "guest",
        type: "donation",
      },
    });

    return res.json({ url: session.url });
  } catch (error) {
    logger.error("Donation session error", error);
    return res.status(500).json({ error: "Stripe error" });
  }
});

/*
==================================================
EXPORT
==================================================
*/
exports.api = onRequest(app);