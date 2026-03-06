export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      {children}
    </div>
  );
}