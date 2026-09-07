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
      <div className="max-w-full mx-auto grid grid-cols-1 gap-6 items-center md:grid-cols-2 md:gap-x-20 md:justify-between">
        <div className="contents md:flex md:flex-col md:justify-center md:col-start-2 md:row-start-1">
          <h2 className="order-1 text-xl md:text-3xl lg:text-4xl font-semibold md:text-start text-center font-display text-primary" id="learning-title">Learning Management System</h2>
          <div className="order-3 flex flex-col gap-6 md:mt-6">
            <div className="bg-primary/10 rounded-sm p-6">
              <p className="text-xs lg:text-lg text-black leading-relaxed tracking-wider">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey.
                From technical courses covering the latest programming
                languages and development frameworks to soft skills training in
                leadership, effective communication and project management, TG
                Academy offers a wide range of courses to cater to diverse
                learning needs. With accessible and interactive learning
                materials, individuals can enhance their skills and stay ahead
                in today&apos;s competitive tech landscape.
              </p>
              <p className="font-semibold text-primary text-xs lg:text-lg  tracking-wider my-5">
                Some of our courses include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-xs lg:text-lg  text-black">
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
        <div className="order-2 flex justify-center md:col-start-1 md:row-start-1 items-center">
          <div className="w-72 h-72 md:w-100 md:h-100 lg:w-140 lg:h-140 rounded-full overflow-hidden">
            <Image
              className="object-cover w-full h-full"
              src="/raw_3.png"
              alt="Two business professionals smiling together in a bright office"
              width={556}
              height={564}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
