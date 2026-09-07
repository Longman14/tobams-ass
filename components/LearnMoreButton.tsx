import { ArrowUpRight } from "lucide-react";

export default function LearnMoreButton() {
  return (
    <button
      type="button"
      className={`gap-2 bg-primary text-white text-sm lg:text-lg font-semibold flex justify-center items-center px-5 w-fit h-10 lg:w-43.25 lg:h-12 cursor-pointer py-3 rounded-sm hover:bg-[#4a1531] transition-colors`}
    >
      Learn More
      <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
    </button>
  );
}