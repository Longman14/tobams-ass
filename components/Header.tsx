'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, MenuIcon, UserIcon, XIcon } from "lucide-react";

const navigation = ["About", "What We Do", "Jobs", "Projects", "TG Academy", "Strategic Partnership", "Pricing", "Book a Consultation"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="flex h-20 items-center justify-between border-b border-[#DDD0DA] px-4 md:h-26 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center bg-white gap-2">
          <Image src="/tobams-logo.png" alt="Tobams Group"
          className="h-12 w-fit object-cover md:h-16"
          width={100} height={40} />
        </Link>
        <div className="hidden items-center gap-4 md:flex lg:gap-8">
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

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-[#151515] text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <nav className="mx-auto hidden min-h-17.5 max-w-6xl items-center justify-center gap-4 md:flex lg:gap-8" aria-label="Main navigation">
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

      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-20 z-50 overflow-y-auto overscroll-contain border-b border-[#DDD0DA] bg-white px-4 pb-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-3 border-b border-[#DDD0DA] py-5">
            <button
              type="button"
              className="flex w-40 items-center justify-center gap-2 rounded-sm bg-primary p-4 font-sans text-white"
            >
              <span className="rounded-full bg-[#DDD0DA] p-1">
                <UserIcon className="h-5 w-5 text-primary" />
              </span>
              Account
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="w-40 rounded-sm bg-secondary p-4 font-sans text-white"
            >
              Take Assessment
            </button>
          </div>

          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item, index) => {
              const isActive = index === 0;
              return (
                <Link
                  href=""
                  key={item}
                  className={`flex items-center justify-between border-b py-4 text-sm transition-colors ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-[#DDD0DA] text-[#151515] hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
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
        </div>
      )}
    </header>
  );
}