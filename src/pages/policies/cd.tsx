import React from "react";
import BackHome from "../../components/BackHome";

export default function LegalCompliance() {
  return (
    <>
      <BackHome />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
          Legal & Compliance
        </h1>

        {/* ---------------- PRIVACY ---------------- */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-2">Privacy Policy</h2>
          <p className="text-gray-700">
            ATF respects your privacy and ensures responsible handling of your
            personal information. Data collected is used only for membership,
            event registration, and communication purposes.
          </p>
        </section>

        {/* ---------------- TERMS ---------------- */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-2">Terms & Conditions</h2>
          <p className="text-gray-700">
            By accessing ATF services, you agree to follow our community rules,
            non-discrimination policies, and event safety guidelines.
          </p>
        </section>

        {/* ---------------- REFUND POLICY ---------------- */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-2">Refund / Cancellation Policy</h2>
          <p className="text-gray-700">
            Event registrations may be refunded if cancelled 7 days before the
            event. Donations are non-refundable except in case of billing errors.
          </p>
        </section>

        {/* ---------------- DELIVERY / SHIPPING ---------------- */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-2">Delivery / Shipping Policy</h2>
          <p className="text-gray-700">
            ATF provides digital confirmations for events and memberships.
            Physical shipments (if applicable) are delivered within 7–10 days.
          </p>
        </section>

        {/* ---------------- PRODUCTS / SERVICES ---------------- */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-2">Products & Services Overview</h2>
          <p className="text-gray-700">
            ATF offers memberships, event registrations, cultural programs, youth
            initiatives, workshops, and community support activities.
          </p>
        </section>

        {/* ---------------- PRICING / FEES ---------------- */}
        <section>
          <h2 className="text-xl font-semibold text-[#B91C1C] mb-2">Pricing & Fees Disclosure</h2>
          <p className="text-gray-700">
            ATF fees vary based on event type, membership level, and service
            category. All pricing is transparent and displayed before payment.
          </p>
        </section>
      </div>
    </>
  );
}
