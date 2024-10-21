import "./App.css";
import { NavBar } from "./components/LandingPageSections";
import { HeroSection } from "./components/LandingPageSections";
import { Footer } from "./components/LandingPageSections";
import ArticlesSection from "./components/ArticlesSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <HeroSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
}
