import Footer from "@/components/global/footer/footer";
import Navbar from "@/components/global/navbar/navbar";
import { ReactLenis } from "./utils/lenis";

const MarketingPagesLayout = ({ children }) => {
  return (
    <main className="min-h-screen scroll-smooth bg-gradient-primary-from-top">
      <ReactLenis root>
        <Navbar />
        {children}
        <Footer />
      </ReactLenis>
    </main>
  );
};

export default MarketingPagesLayout;
