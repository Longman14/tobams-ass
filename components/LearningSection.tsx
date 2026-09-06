import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function LearningSection() {

  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];
  return (
    <section className="bg-primary/10 px-4 py-6 lg:px-16 lg:py-12 mx-auto flex items-center gap-12 lg:gap-20" id="tg-academy" aria-labelledby="learning-title">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="lg:w-139 lg:h-142 w-82 h-82 md:w-102 md:h-100 rounded-full overflow-hidden">
          <Image
          className="object-cover w-full h-full"
          src="/raw_3.png"
          alt="Two business professionals smiling together in a bright office"
         width={556}
         height={564}
        
        />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-5xl font-semibold font-display text-primary" id="learning-title">Learning Management System</h2>
          <div className="bg-primary/10 rounded-sm p-6">
            <p className="text-xs lg:text-lg text-black leading-relaxed tracking-wider">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey.
              From technical courses covering the latest programming
              languages and development frameworks to soft skills training
              in leadership, effective communication and project
              management, TG Academy offers a wide range of courses to
              cater to diverse learning needs. With accessible and
              interactive learning materials, individuals can enhance
              their skills and stay ahead in today's competitive tech
              landscape.
            </p>
 
            <p className="font-semibold text-primary text-xs tracking-wider lg:text-lg my-5">
              Some of our courses include:
            </p>
 
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 text-xs lg:text-lg  text-black ">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-black tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="gap-2 bg-primary text-white text-sm lg:text-lg font-semibold flex justify-center items-center px-5 w-fit h-10 lg:w-43.25 lg:h-12 cursor-pointer py-3 rounded-sm hover:bg-[#4a1531] transition-colors">
            Learn More
            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
       
 
         
      

        
      </div>
      
    </section>
  );
}