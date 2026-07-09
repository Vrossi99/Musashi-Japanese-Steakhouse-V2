export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080809] text-washi/50 px-6 py-12 pb-32 md:pb-12 text-center text-[12px] uppercase tracking-widest border-t border-washi/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-3 text-gold">
          <span className="font-serif text-lg tracking-[0.2em]">武蔵</span>
          <div className="w-3 h-3 rounded-full border border-vermillion flex items-center justify-center text-vermillion">
            <span className="font-serif text-[5px] leading-none">武蔵</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
          <p>3900 Paradise Rd, Las Vegas, NV 89169</p>
          <p className="hidden md:block">·</p>
          <p>(702) 735-4744</p>
          <p className="hidden md:block">·</p>
          <p>Mon–Thu 5PM–12AM, Fri–Sun 5PM–1AM</p>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <a 
            href="https://www.facebook.com/Musashi702/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-washi transition-colors"
          >
            Facebook
          </a>
          <a 
            href="https://maps.google.com/?q=Musashi+Japanese+Steakhouse+3900+Paradise+Rd+Las+Vegas+NV+89169" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-washi transition-colors"
          >
            Maps
          </a>
        </div>

        <p className="mt-8 text-washi/30 normal-case tracking-normal">
          &copy; {currentYear} Musashi Japanese Steakhouse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
