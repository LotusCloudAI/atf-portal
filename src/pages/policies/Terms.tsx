import BackHome from "../../components/BackHome";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <BackHome />

      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
        Terms & Conditions
      </h1>

      <p className="mb-4">
        These Terms govern your use of the American Telugu Federation (ATF)
        website, membership services, event registrations, and digital
        platforms. By accessing this website, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">General Use</h2>
      <p className="mb-4">
        You may not misuse the platform, attempt unauthorized access, or use the
        website for fraudulent activities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Membership</h2>
      <p className="mb-4">
        Membership fees are non-transferable and subject to ATF approval.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Payments</h2>
      <p className="mb-4">
        Payments are securely processed through Wells Fargo Merchant Services or
        other PCI-compliant gateways. ATF does not store payment cards.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
      <p>
        ATF is not liable for service interruptions, third-party failures, or
        unauthorized system access beyond reasonable control.
      </p>
    </div>
  );
}
