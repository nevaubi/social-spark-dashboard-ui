
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
