export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="bg-[#0e0b23]/50 p-8 mx-2 rounded-4xl w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
