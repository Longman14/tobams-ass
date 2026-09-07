import { Zap } from "lucide-react";
import Image from "next/image";
import LearnMoreButton from "./LearnMoreButton";

const features = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section className="bg-[#FBD9DE] rounded-2xl px-6 py-8 lg:px-10 lg:py-10 my-4 lg:my-16 lg:mx-16 mx-4" id="tg-transformation" aria-labelledby="transformation-title">
      {/* Header */}
      <p className="text-sm lg:text-[20px] italic text-[#1671d9] font-medium mb-2 font-display">
        Learning With Our CEO:
      </p>
      <h2 className="text-xl md:text-2xl lg:text-[32px] italic font-semibold text-primary mb-4 lg:mb-6 font-display">
        Transformation Hub With Jite Newton
      </h2>
      <p className="text-sm text-black lg:text-lg leading-relaxed mb-6 w-full tracking-wide">
        Transformation Hub with Jite Newton is a flagship webinar series
        curated by the CEO, Dr. Jite Newton. Designed to elevate career
        trajectories and leadership capabilities, this exclusive event
        offers invaluable insights and strategies for personal and
        professional growth. Whether you&apos;re seeking to advance your career
        or enhance your leadership skills, the Transformation Hub provides
        a transformative learning experience to unlock your full potential
        and drive success in your endeavours.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <Image
          src="/raw_8.png"
          alt="Webinar series with Jite Newton image"
          className="w-full h-64 md:h-full lg:h-85 object-cover rounded-lg"
            width={600}
            height={400}
        />

        <div className="flex flex-col p-4 gap-3 lg:gap-6 lg:px-5 lg:py-6 rounded-lg bg-white/30">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-3 mb-4 ">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm lg:text-lg text-black"
              >
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 fill-[#DDD0DA] text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <LearnMoreButton />
        </div>
      </div>
    </section>
  );
}