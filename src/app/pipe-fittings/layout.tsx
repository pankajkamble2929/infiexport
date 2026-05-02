import PipeNavbar from "./components/PipeNavbar";
import PipeFooter from "./components/PipeFooter";

export default function PipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PipeNavbar />

      <main className="bg-[#1A237E]/5 min-h-screen">
        {children}
      </main>

      <PipeFooter />
    </>
  );
}