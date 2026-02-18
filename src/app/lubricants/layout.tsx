import LubricantNavbar from "./components/LubricantNavbar";
import LubricantFooter from "./components/LubricantFooter";

export default function LubricantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LubricantNavbar />

      <main className="bg-[#F4F6FA] min-h-screen">
        {children}
      </main>

      <LubricantFooter />
    </>
  );
}
