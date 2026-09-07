import { ChevronRight } from "lucide-react";

  export default function TrainingTheConsultant() {

    const features = [
      {
        title: "Expert-Led Learning",
        description:
          "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
      },
      {
        title: "Interactive Workshops",
        description:
          "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
      },
      {
        title: "Comprehensive Curriculum",
        description:
          "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
      },
      {
        title: "Global Recognition",
        description:
          "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
      },
    ];
    
    return (
      <section className="bg-primary/10 px-6 py-8 lg:px-16 lg:py-12 my-2 mx-0 lg:my-10"
        id="tg-training-the-consultant"
        aria-labelledby="training-the-consultant-title"
      >
        <div className="mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-primary mb-3 font-display">
            Training The Consultant
          </h2>
          <p className="text-sm lg:text-lg font-semibold text-primary mb-4 lg:mb-5">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-sm text-black lg:text-lg leading-relaxed mb-4 lg:mb-5 tracking-wide">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field,
            immerse yourself in a thorough curriculum, and hone your
            training methods through interactive workshops. Participating
            in our program will enable you to gain expertise in diverse
            courses while also developing the abilities to mentor and
            encourage others in their career advancement.
          </p>
  
          <div className="bg-primary rounded-lg p-4 md:p-6 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-sm lg:text-lg font-bold font-display text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-lg text-white leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          <button
          type="button"
      className={`gap-2 bg-primary text-white text-sm lg:text-lg font-semibold flex justify-center items-center px-5 w-fit h-10 lg:w-43.25 lg:h-12 cursor-pointer py-3 rounded-lg hover:bg-[#4a1531] transition-colors`}
    >
      Learn More
      <ChevronRight className="w-5 h-5" />
    </button>
        </div>
      </section>
    );
  }