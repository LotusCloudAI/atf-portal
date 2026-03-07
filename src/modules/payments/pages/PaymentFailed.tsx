import { useTranslation } from "react-i18next";
const { t } = useTranslation();
const PaymentFailed = () => {
  return (
    <div className="p-6 text-red-600">
      <h1 className="text-2xl font-bold">
        {t("Payment Failed")}
      </h1>
    </div>
  );
};

export default PaymentFailed;
