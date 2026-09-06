import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";
import ManagementDevelopmentProgram from "@/components/ManagementProgram";
import TrainingPrograms from "@/components/TrainingProgram";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col bg-white">
        <HeroSection />
        <div className="py-4 lg:py-10">
        <LearningSection />
        </div>
        <TrainingPrograms />
        <ManagementDevelopmentProgram />
      
        

      </main>
      <Footer />
    </>
  );
}
