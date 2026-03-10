import { useRole } from "../../../context/RoleContext";

const GovernanceDashboard = () => {
  const { role } = useRole();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Governance Overview</h1>
      <p>Current Role: {role}</p>
      <p>Content Isolation Active</p>
    </div>
  );
};

export default GovernanceDashboard;
