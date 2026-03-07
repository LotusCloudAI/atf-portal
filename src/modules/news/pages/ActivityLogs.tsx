const mockLogs = [
  {
    id: "1",
    action: "Created",
    entity: "Article",
    user: "Admin",
    timestamp: new Date().toISOString()
  }
];

const ActivityLogs = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Activity Logs</h2>

      {mockLogs.map(log => (
        <div key={log.id} className="border p-3 mt-3 rounded">
          {log.action} {log.entity} by {log.user}
        </div>
      ))}
    </div>
  );
};

export default ActivityLogs;
