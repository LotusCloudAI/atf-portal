import BackHome from "../../components/BackHome";

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <BackHome />

      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
        Pricing & Fees Disclosure
      </h1>

      <p className="mb-4">
        ATF maintains transparent pricing for all services and programs. Fees
        may vary depending on membership level, event type, and program costs.
      </p>

      <h2 className="text-xl font-semibold mb-2">Typical Fee Structure</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Membership Fees: Based on individual or family tier</li>
        <li>Event Ticket Fees: Non-profit subsidized pricing</li>
        <li>Scholarship Applications: Free</li>
        <li>Donations: Voluntary contributions</li>
      </ul>

      <p className="mt-6">
        All payments are processed securely via Wells Fargo Merchant Services
        and/or approved PCI-compliant gateways.
      </p>
    </div>
  );
}
