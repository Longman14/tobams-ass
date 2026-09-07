import Image from "next/image";
import LearnMoreButton from "./LearnMoreButton";

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
    <section className="bg-primary/10 px-4 py-6 mx-auto flex items-center gap-12" id="tg-academy" aria-labelledby="learning-title">
      <div className="max-w-full mx-auto grid grid-cols-1 gap-6 items-center">
        <h2 className="text-3xl font-semibold md:text-start text-center font-display text-primary" id="learning-title">Learning Management System</h2>
        <div className="flex justify-center">
          <div className="w-115 h-115 md:w-120 md:h-120 lg:w-142 lg:h-142 rounded-full overflow-hidden">
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
          <div className="bg-primary/10 rounded-sm p-6">
            <p className="text-xs text-black leading-relaxed tracking-wider">
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
 
            <p className="font-semibold text-primary text-xs tracking-wider my-5">
              Some of our courses include:
            </p>
 
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-xs text-black ">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-black tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LearnMoreButton />
            </div>
          </div>
        </div>
       
 
         
      

        
      </div>
      
    </section>
  );
}