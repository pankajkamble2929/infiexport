import AgroNavbar from "./components/AgroNavbar";
import AgroFooter from "./components/AgroFooter";

export default function AgroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AgroNavbar />

      <main className="bg-emerald-50/40 min-h-screen">
        {children}
      </main>

      <AgroFooter />
    </>
  );
}