import RiceNavbar from "./components/RiceNavbar";
import RiceFooter from "./components/RiceFooter";

export default function RiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RiceNavbar />
      <main className="bg-[#F8F9FA] min-h-screen">
        {children}
      </main>
      <RiceFooter />
    </>
  );
}
