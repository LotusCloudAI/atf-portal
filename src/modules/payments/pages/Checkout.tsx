import { processPayment } from "../services/paymentService";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handlePay = async () => {
    setLoading(true);
    const result = await processPayment();
    setLoading(false);

    alert(result.status === "completed"
      ? "Payment Successful"
      : "Payment Failed");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Checkout
      </h1>

      <input className="border p-2 w-full mb-3" placeholder="Card Number" />
      <input className="border p-2 w-full mb-3" placeholder="Expiry" />
      <input className="border p-2 w-full mb-3" placeholder="CVC" />

      <button
        onClick={handlePay}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
    </div>
  );
};

export default Checkout;
