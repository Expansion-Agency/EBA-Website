import { Footer } from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
