const Invoice = () => {
  return (
    <div className="border p-6 rounded">
      <h2 className="font-bold">Invoice</h2>
      <p>Amount: $99</p>
      <p>Status: Paid</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
        Download Invoice</button>
    </div>
  );
};

export default Invoice;
