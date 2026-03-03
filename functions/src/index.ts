import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import Stripe from "stripe";

admin.initializeApp();

const stripe = new Stripe(functions.config().stripe.secret, {
  apiVersion: "2023-10-16",
});

export const stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      functions.config().stripe.webhook_secret
    );
  } catch (err) {
    console.error("Webhook signature verification failed.");
    return res.status(400).send("Webhook Error");
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const planId = session.metadata?.planId;

    if (userId) {
      await admin.firestore().collection("members").doc(userId).update({
        membershipStatus: "active",
        membershipPlan: planId,
        membershipStartDate: admin.firestore.FieldValue.serverTimestamp(),
      });

      await admin.firestore().collection("payments").add({
        userId,
        stripeSessionId: session.id,
        amount: session.amount_total,
        currency: session.currency,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
  }

export const createDonationSession = functions.https.onRequest(
  async (req, res) => {
    const { amount, email } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ATF Donation",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "https://yourdomain.com/donation/success",
      cancel_url: "https://yourdomain.com/donation/cancel",
      metadata: {
        donation: "true",
      },
    });

    res.json({ id: session.id });
  }
);


  res.status(200).send("Success");
});