import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";



export default function Testimonials() {
    const testimonials = [
        {
          name: "Aisha Yusuf",
          role: "Founder, CraftHub NG",
          avatar: "/avatar1.png",
          quote:
            "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
        },
        {
          name: "John Davies",
          role: "Marketing Manager, E-Commerce Emporium",
          avatar: "/avatar2.png",
          quote:
            "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
        },
        {
          name: "Chinonso Nwankwo",
          role: "HR Director, FutureTech Solutions",
          avatar: "/avatar3.png",
          quote:
            "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
        },
        {
          name: "Tolu Adebayo",
          role: "Operations Lead, Swift Logistics",
          avatar: "/avatar3.png",
          quote:
            "The team's attention to detail and responsiveness made the whole process seamless from start to finish. Would work with them again in a heartbeat.",
        },
      ];
  return (
    <section className="bg-white px-6 py-14 my-4 lg:my-16 mx-auto w-full">
        <div className="px-5 lg:px-16 pb-5 lg:pb-10">
        <h2 className="text-2xl md:text-3xl font-display lg:text-[40px] font-bold text-center text-black mb-6 lg:mb-10">
        Testimonials
      </h2>

      <div className="mx-auto overflow-hidden">
        <div className="flex gap-5 lg:gap-6 overflow-x-hidden">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border-l border-secondary rounded-2xl shadow-sm lg:px-6 lg:py-5 p-4 shrink-0 w-full h-56 md:w-96 lg:w-105 lg:h-61 flex flex-col justify-around"
            >
              <div className="flex items-center gap-3 mb-3 lg:mb-6">
                <Image
                  src={t.avatar}
                  alt={`${t.name}, ${t.role}`}
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover"
                    width={40}
                    height={40}
                />
                <div>
                  <p className="text-sm font-semibold text-black lg:text-lg">
                    {t.name}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm lg:text-lg text-black tracking-wide leading-loose lg:leading-snug">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-6 lg:mt-10">
          <button
            aria-label="Previous testimonial"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F04354]/10 text-secondary cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            aria-label="Next testimonial"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F04354]/10 text-secondary cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
        </div>
     
    </section>
  );
}