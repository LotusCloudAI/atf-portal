import BackHome from "../../components/BackHome";

export default function Delivery() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <BackHome />

      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
        Delivery / Shipping Policy
      </h1>

      <p className="mb-4">
        ATF does not ship physical goods. All services are delivered digitally
        or through in-person events.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Digital Deliverables</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Event tickets delivered via email</li>
        <li>Membership confirmations sent automatically</li>
        <li>Receipts sent via email</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Processing Time</h2>
      <p>Deliveries are immediate unless system delays occur.</p>
    </div>
  );
}
