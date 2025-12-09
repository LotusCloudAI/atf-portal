import BackHome from "../../components/BackHome";

export default function Products() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <BackHome />

      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
        Products & Services Overview
      </h1>

      <p className="mb-4">
        ATF provides cultural, social, educational, and community support
        services for Telugu communities in the United States.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Membership programs</li>
        <li>Event registrations</li>
        <li>Youth & educational programs</li>
        <li>Scholarship initiatives</li>
        <li>Women empowerment & leadership programs</li>
      </ul>
    </div>
  );
}
