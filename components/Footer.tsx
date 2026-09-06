export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-[#431037] px-[clamp(1.25rem,8vw,7.5rem)] py-[22px] text-[11px] text-white max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-2" id="contact">
      <p className="m-0">Build skills that move your career forward.</p>
      <a className="text-[#f6c5d0] hover:underline" href="mailto:hello@tobamsgroup.com">hello@tobamsgroup.com</a>
    </footer>
  );
}