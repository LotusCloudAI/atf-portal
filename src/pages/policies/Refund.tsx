import BackHome from "../../components/BackHome";

export default function Refund() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <BackHome />

      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
        Refund & Cancellation Policy
      </h1>

      <p className="mb-4">
        ATF strives to deliver high-quality community services. Please review
        our refund and cancellation guidelines below.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Event Registrations</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Cancellations before 7 days of event: 100% refund.</li>
        <li>Within 7 days: 50% refund.</li>
        <li>Within 48 hours: Non-refundable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Donations</h2>
      <p className="mb-4">
        Donations are non-refundable as they are processed immediately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Membership Fees</h2>
      <p>Annual membership fees are non-refundable.</p>
    </div>
  );
}
