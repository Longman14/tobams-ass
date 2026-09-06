import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-100 lg:h-127.75 overflow-hidden" id="top" aria-labelledby="hero-title">
      <Image
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] lg:object-center"
        src="/raw_2.png"
        alt="Professional woman working at a desk with digital charts on screen"
       width={1920}
       height={1080}
        
      />
      <div className="absolute inset-0 bg-[#000000]/70" />
      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-3xl lg:max-w-269.25 mx-auto">
        <span className="bg-white/10 text-white text-xs lg:text-sm tracking-wider uppercase px-6 py-2 rounded-full mb-4 lg:px-12 lg:py-3">What we do</span>
        <h1 className="text-4xl lg:text-[56px] font-bold text-white font-display mb-4" id="hero-title">Training and Development</h1>
        <p className="text-white text-sm lg:text-[16px] mb-10 w-full tracking-wide">Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.</p>
        <button className="  rounded-sm bg-primary cursor-pointer px-6 py-2 lg:py-4 lg:px-7 text-xs md:text-sm lg:text-lg  text-white transition duration-180  hover:bg-[#431037]
        h-12  flex items-center justify-center
        " >Book a Consultation</button>
      </div>
    </section>
  );
}