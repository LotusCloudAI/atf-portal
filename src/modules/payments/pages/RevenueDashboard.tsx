const RevenueDashboard = ({ subscription }) => {
  if (subscription.plan !== "lifetime") {
    return <p>Admin Access Only</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        Revenue Overview
      </h1>

      <p className="mt-4">Total Revenue: $5,000 (Mock)</p>
      <p className="mt-3">Active Subscriptions: 120</p>
    </div>
  );
};

export default RevenueDashboard;