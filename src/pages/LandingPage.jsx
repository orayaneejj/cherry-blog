import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <NavBar />
      <HeroSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
}
export default LandingPage;
