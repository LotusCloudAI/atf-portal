import { PLANS } from "../data/plans";
import { useSubscriptionManager } from "../hooks/useSubscriptionManager";

const Upgrade = () => {
  const { upgrade } = useSubscriptionManager();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Upgrade Your Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PLANS.map(plan => (
          <div
            key={plan.id}
            className="border p-4 rounded shadow"
          >
            <h2 className="font-semibold text-lg">
              {plan.name}
            </h2>
            <p className="text-xl font-bold mt-2">
              ${plan.price}
            </p>

            <ul className="mt-4">
              {plan.features.map(f => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button
              onClick={() => upgrade(plan.id)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upgrade;
