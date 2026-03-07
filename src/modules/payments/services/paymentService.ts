export const processPayment = async () => {
  return new Promise<{ status: string }>((resolve) => {
    setTimeout(() => {
      resolve({ status: "completed" });
    }, 1500);
  });
};
