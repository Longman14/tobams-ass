import { Diamond, Zap } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: "/raw_4.png",
    imageAlt: "Corporate training session in a meeting room",
    imageFirst: false,
  },
  {
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: "/raw_5.png",
    imageAlt: "Individual in a focused training discussion",
    imageFirst: true,
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    bullets: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: "/raw_6.png",
    imageAlt: "Team presenting during a capacity development workshop",
    imageFirst: false,
  },
];

export default function TrainingPrograms() {
  return (
    <section className="px-4 py-8 lg:px-16 lg:py-16 bg-white">
      <div className="mx-auto flex flex-col gap-20 lg:gap-30">
        {sections.map((section) => (
          <div
            key={section.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Text block */}
            <div
              className={
                section.imageFirst ? "order-2 md:order-2" : "order-2 md:order-1"
              }
            >
              <h3 className="text-3xl lg:text-5xl font-semibold font-display text-black mb-3 lg:mb-4">
                {section.title}
              </h3>
              <p className="text-sm lg:text-lg text-gray-600 leading-relaxed tracking-wide mb-4 lg:mb-5">
                {section.description}
              </p>
              <ul className="flex flex-col gap-2 ml-4 lg:ml-7.5">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm lg:text-lg text-gray-600"
                  >
                    <Zap
                      className="w-3 h-3 lg:h-5 lg:w-5 fill-primary  text-primary shrink-0"
                      strokeWidth={0}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image block */}
            <div
              className={
                section.imageFirst
                  ? "order-1 md:order-1"
                  : "order-1 md:order-2"
              }
            >
              <Image
                src={section.image}
                alt={section.imageAlt}
                className="w-full h-70 lg:h-96 md:h-84 object-cover rounded-lg rounded-tl-4xl overflow-hidden"
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}