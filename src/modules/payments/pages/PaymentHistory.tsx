const mockPayments = [
  {
    id: "1",
    amount: 99,
    status: "completed",
    createdAt: new Date().toISOString()
  }
];

const PaymentHistory = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Payment History
      </h1>

      {mockPayments.map(p => (
        <div key={p.id} className="border p-3 mb-3">
          ${p.amount} – {p.status}
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;
