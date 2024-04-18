
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col gap-[4.8rem] mx-auto max-w-7xl">
    <Header />
    <Menu />
    <Footer />        
    </div>
  );
}
