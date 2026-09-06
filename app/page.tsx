import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LearningSection />
      
      </main>
      <Footer />
    </>
  );
}
