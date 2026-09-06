import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, UserIcon } from "lucide-react";

const navigation = ["About", "What We Do", "Jobs", "Projects", "TG Academy", "Strategic Partnership", "Pricing", "Book a Consultation"];

export function Header() {
  return (
    <header className="relative z-2 bg-white">
      <div className="flex h-26 items-center justify-between md:px-8 lg:px-16 border-b border-[#DDD0DA]">
        <Link href="/" className="flex items-center bg-white gap-2">
          <Image src="/tobams-logo.png" alt="Tobams Group"
          className="h-16 w-fit object-cover"
          width={100} height={40} />
        </Link>
        <div className="flex items-center gap-4 lg:gap-8">
         <button
         type="button"
         className="flex items-center gap-2 rounded-sm p-4 h-12 cursor-pointer bg-primary text-white font-sans">
          <span className="rounded-full p-1 bg-[#DDD0DA] ">
            <UserIcon className="h-5 w-5 text-primary"/>
          </span>
          Account

          <ChevronDownIcon className="h-4 w-4" />
      

         </button>

         <button
         type="button"
         className="flex items-center gap-2 rounded-sm p-4 h-12 cursor-pointer bg-secondary text-white font-sans">
         
          Take Assessment
        
      

         </button>
          
        </div>
      </div>

      <nav className="flex min-h-17.5 items-center justify-center gap-4 lg:gap-8 max-w-6xl mx-auto" aria-label="Main navigation">
        {navigation.map((item, index) => {
          const isActive = index === 0;
          return (
            <Link 
              href=""
              key={item}
              className={`flex text-[12px] px-2 lg:text-base items-center gap-1 py-1  transition-colors ${
                isActive 
                  ? "text-primary border-b border-primary" 
                  : "text-[#151515] border-b-2 border-transparent hover:text-primary"
              }`}
            >
              {item}
              {[0, 1, 2].includes(index) && (
                <span aria-hidden="true" className={isActive ? "text-primary" : "text-[#777078]"}>
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}