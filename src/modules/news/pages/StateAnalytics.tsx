import { mockNews } from "../data/mockNews";

const StateAnalytics = () => {
  const states = [...new Set(mockNews.map(n => n.state))];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">
        State News Analytics
      </h2>

      {states.map(state => {
        const count = mockNews.filter(n => n.state === state).length;
        return (
          <div key={state} className="mt-3">
            {state}: {count} Articles
          </div>
        );
      })}
    </div>
  );
};

export default StateAnalytics;