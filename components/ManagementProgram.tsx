import { Zap } from "lucide-react";
import Image from "next/image";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentProgram() {
  return (
    <section className="bg-[#2C0922] rounded-[20px] px-6 py-6 lg:py-10 lg:px-10 lg:mx-16 my-4 lg:my-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* Image */}
        <div>
          <Image
            src="/raw_7.png"
            alt="Colleagues reviewing a report together"
            className="w-full h-72 md:h-120 lg:h-158 object-cover rounded-lg"
            width={600}
            height={400}
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold font-display text-white mb-3 lg:mb-4 leading-snug">
            Management Development Program
          </h2>

          <p className="text-sm lg:text-lg text-white leading-relaxed tracking-wide mb-2 lg:mb-3">
            Tobams Group offers a comprehensive Management Development
            Program designed to equip corporate organisations with the
            high-performing leaders they need to thrive.
          </p>

          <p className="text-sm lg:text-lg text-white leading-relaxed tracking-wide mb-4 lg:mb-8">
            Our program includes workshops, seminars, coaching sessions,
            online courses, and experiential learning opportunities
            designed to improve leadership, strategic thinking,
            communication, and other essential managerial competencies for
            corporate organisations.
          </p>

          <div className="flex flex-col px-2 lg:px-4 py-2">
          <ul className="flex flex-col gap-3 lg:gap-6.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 bg-[#8f6182] rounded-lg px-4 py-3 text-sm lg:text-lg text-white"
              >
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 fill-white text-white" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
}