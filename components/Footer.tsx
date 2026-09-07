import { Phone } from "lucide-react";
import Image from "next/image";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-[#11040e] text-white px-6 py-6 lg:py-8 lg:px-16">
      <div className="w-full mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 justify-around w-full ">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/tobams2.png"
                alt="Tobams Group logo"
                className="h-20 w-40 lg:w-47 md:h-20"
                width={400}
                height={400}
              />
              
            </div>
            <p className="text-sm lg:text-base text-white/70 font-display leading-relaxed mb-5">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing
              in talent acquisition, internships, and skill development
              with a global perspective.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white 
                p-1 md:p-2.5"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-4 h-4 md:w-5 md:h-5 object-cover"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 md:w-10 md:h-10  flex items-center justify-center rounded-full bg-white p-1 md:p-2.5"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-4 h-4 md:w-5 md:h-5 object-cover"
                  width={24}
                  height={24 }
                />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white p-1 md:p-2.5"
              >
                <Image
                  src="/x.png"
                  alt="X (Twitter)"
                  className="w-4 h-4 md:w-5 md:h-5 object-cover"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="font-bold font-display text-sm md:text-[20px] text-white mb-4">What We Do</h3>
            <ul className="flex flex-col gap-2.5">
              {whatWeDo.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="md:text-sm text-xs lg:text-base text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold font-display text-sm md:text-[20px] text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs md:text-sm lg:text-base text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-bold font-display text-sm md:text-[20px] text-white mb-4">Solution</h3>
            <ul className="flex flex-col gap-2.5">
              {solution.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs md:text-sm lg:text-base text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile contact and office details */}
        <div className="lg:hidden bg-white/6 rounded-lg p-4 my-5">
          <div className="mb-8">
            <h4 className="font-bold font-display text-sm md:text-[20px] text-white mb-4">
              Contact Information
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:theteam@tobamsgroup.com"
                className="flex items-center gap-4 text-xs text-white wrap-break-word"
              >
                <Image
                  src="/mail.png"
                  alt="Mail icon"
                  className="w-5 h-5 object-contain shrink-0"
                  width={24}
                  height={24}
                />
                theteam@tobamsgroup.com
              </a>
              <a
                href="tel:+447886600748"
                className="flex items-center gap-4 text-xs text-white wrap-break-word"
              >
                <Phone className="w-5 h-5 text-secondary fill-current shrink-0" />
                +447886600748
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-display text-sm  text-white mb-4">
              Registered Offices
            </h4>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs text-secondary font-semibold mb-1">
                  United Kingdom
                </p>
                <p className="text-xs text-white leading-relaxed">
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary font-semibold mb-1">
                  Nigeria
                </p>
                <p className="text-xs text-white leading-relaxed">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registered offices + contact */}
        <div className="hidden lg:flex bg-white/6 min-h-0 lg:min-h-51 rounded-lg p-4 sm:p-6 my-5 flex-col justify-around">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 justify-around">
            <div className="lg:col-span-2 self-start min-w-0 lg:border-r lg:border-[#DDD0DA]/12 lg:pr-8">
              <h4 className="font-bold font-display text-sm md:text-[20px] text-white mb-2">
                Registered Offices
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
                <div className="md:border-r md:border-[#DDD0DA]/12 md:pr-8 min-w-0">
                  <p className="text-sm lg:text-base text-secondary font-semibold mb-1">
                    United Kingdom
                  </p>
                  <p className="text-sm text-white lg:text-base leading-relaxed">
                    07451196 (Registered by Company House)
                    
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-sm lg:text-base text-secondary font-semibold mb-1">
                    Nigeria
                  </p>
                  <p className="text-sm text-white lg:text-base leading-relaxed">
                    RC 1048722 (Registered by the Corporate Affairs
                    Commission) 
                    <br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="font-bold font-display text-sm md:text-[20px] text-white mb-2">
                Contact Information
              </h4>
              <div className="flex flex-col gap-2 lg:gap-4">
                <a
                  href="mailto:theteam@tobamsgroup.com"
                  className="flex items-center gap-2 md:gap-4 text-xs md:text-sm lg:text-base text-white  wrap-break-word"
                >
                  <Image src="/mail.png" alt="Mail icon" className="w-4 h-4 md:w-5 md:h-5 object-contain" width={24} height={24} />
                  theteam@tobamsgroup.com
                </a>
                <a
                  href="tel:+447886600748"
                  className="flex items-center gap-2 md:gap-4 text-sm lg:text-base text-white hover:text-white transition wrap-break-word"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-current shrink-0" />
                  +447886600748
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#DDD0DA]/10">
          <p className="order-2 sm:order-0 text-sm text-white lg:text-base font-display font-light text-center">
            Copyright © Tobams Group. 2024. All rights <br className="block md:hidden"/> reserved.
          </p>
          <div className="order-1 sm:order-0 w-full sm:w-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <a
              href="#"
              className="order-3 sm:order-0 basis-full sm:basis-auto text-center text-sm text-white lg:text-base font-display font-light underline"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="order-1 sm:order-0 text-sm text-white lg:text-base font-display font-light underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="order-2 sm:order-0 text-sm text-white lg:text-base font-display font-light underline"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}