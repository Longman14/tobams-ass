
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LearningSection } from "@/components/LearningSection";
import ManagementDevelopmentProgram from "@/components/ManagementProgram";
import MobileCTA from "@/components/MobileCTA";
import Testimonials from "@/components/Testimonials";
import TrainingPrograms from "@/components/TrainingProgram";
import TrainingTheConsultant from "@/components/TrainingTheConsultant";
import TransformationHub from "@/components/TransformationHub";
import  Footer  from "@/components/Footer";

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
        <TransformationHub />
        <TrainingTheConsultant />
        <section className="bg-white flex flex-col" aria-label="Testimonials">
          <MobileCTA />
          <div className="mx-auto w-full my-2  p-6 lg:px-16 lg:py-8 hidden bg-primary rounded-lg md:flex md:flex-col gap-6 lg:gap-8 max-w-2xl lg:max-w-6xl items-center justify-center">
            <p className="text-sm lg:text-lg text-white leading-relaxed tracking-wide max-w-xl lg:max-w-2xl text-center">
              Want to accelerate professional and development at your organisation? See how we can help.
            </p>
            <button type="button" className="bg-white text-primary text-sm lg:text-lg font-semibold flex justify-center font-display items-center px-5 w-fit h-10 lg:h-12 cursor-pointer py-3 rounded-sm lg:px-6 lg:py-4">
              Book a Consultation
            </button>

          </div>

          <Testimonials />

        </section>

        <section aria-labelledby="contact-cta-title">
          <div className="mx-auto w-full p-6 lg:px-16 lg:py-10 bg-[#1d0617] min-h-34 md:h-40 lg:h-50 flex flex-col md:flex-row gap-5 lg:gap-8 items-start md:items-center justify-between">
            <div>
              <p className="text-xs lg:text-lg text-white tracking-wide mb-2 lg:mb-3.5">
                Ready to be a part of something extraordinary?
              </p>
              <h2 id="contact-cta-title" className="text-lg md:text-2xl lg:text-[32px] font-semibold text-white font-display tracking-wide">
                 Let&apos;s work together to create a difference
              </h2>

            </div>
            <div className="w-full md:w-auto">
              <button type="button" className="bg-primary text-white text-sm lg:text-lg font-semibold flex justify-center font-display items-center px-5 w-fit md:w-fit h-10 lg:h-12 cursor-pointer py-3 lg:px-6 lg:py-4">
                Get in Touch
              </button>
            </div>

          </div>
        </section>


      
        

      </main>
      <Footer />
    </>
  );
}
