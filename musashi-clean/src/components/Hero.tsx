import { motion } from 'framer-motion';
import { useBusinessHours } from '@/hooks/use-business-hours';

export function Hero() {
  const { status, text } = useBusinessHours();

  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black">

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-col items-center text-center px-6"
      >
        <div className="flex flex-col items-center">
          <span className="font-serif text-gold text-[28px] tracking-[0.25em] mb-4">武蔵</span>
          <h1 className="font-serif text-gold text-[52px] md:text-[80px] leading-none tracking-[0.25em] mb-4">MUSASHI</h1>
          <div className="flex items-center gap-2">
            <span className="font-sans text-washi text-[11px] md:text-[12px] tracking-[0.2em] uppercase">Japanese Steakhouse · Las Vegas</span>
            {/* Hanko Seal */}
            <div className="w-5 h-5 rounded-full border border-vermillion flex items-center justify-center text-vermillion">
              <span className="font-serif text-[8px] leading-none">武蔵</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === 'open' ? 'bg-ember glow-dot' : 'bg-washi/30'}`} />
          <span className="font-sans text-[13px] text-washi/80">{text}</span>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none justify-center">
          <motion.a 
            whileTap={{ scale: 0.97 }}
            href="tel:+17027354744" 
            className="w-full sm:w-auto bg-ember text-sumi font-medium px-8 py-3.5 text-[14px] uppercase tracking-wider hover:bg-ember/90 transition-colors"
          >
            Reserve — Call
          </motion.a>
          <motion.a 
            whileTap={{ scale: 0.97 }}
            href="https://www.foodie-xpress.com/ordering/restaurant/menu?company_uid=63acd96b-a9f2-496a-9bc4-7f9709af2855&restaurant_uid=96df347f-18ef-40e8-a76e-fc9f29ea47f8&facebook=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-washi/20 text-washi px-8 py-3.5 text-[14px] uppercase tracking-wider hover:bg-washi/10 transition-colors"
          >
            Order online &rarr;
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-[1px] h-12 bg-washi/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-washi to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
