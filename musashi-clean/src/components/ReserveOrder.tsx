import { motion } from 'framer-motion';

export function ReserveOrder() {
  return (
    <section id="reserve" className="bg-sumi text-center px-6 py-16 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-vermillion flex items-center justify-center text-vermillion mb-8 md:mb-12">
          <span className="font-serif text-[14px] md:text-[18px] leading-none">武蔵</span>
        </div>
        
        <a 
          href="tel:+17027354744"
          className="font-serif text-gold text-[34px] md:text-[64px] hover:text-washi transition-colors mb-8 md:mb-16"
        >
          (702) 735-4744
        </a>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
          <motion.a 
            whileTap={{ scale: 0.97 }}
            href="tel:+17027354744" 
            className="w-full sm:w-auto bg-ember text-sumi font-medium px-8 md:px-12 py-3.5 md:py-4 text-[13px] md:text-[14px] uppercase tracking-wider hover:bg-ember/90 transition-colors"
          >
            Reserve — Call
          </motion.a>
          <motion.a 
            whileTap={{ scale: 0.97 }}
            href="https://www.foodie-xpress.com/ordering/restaurant/menu?company_uid=63acd96b-a9f2-496a-9bc4-7f9709af2855&restaurant_uid=96df347f-18ef-40e8-a76e-fc9f29ea47f8&facebook=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-washi/20 text-washi px-8 md:px-12 py-3.5 md:py-4 text-[13px] md:text-[14px] uppercase tracking-wider hover:bg-washi/10 transition-colors"
          >
            Order online &rarr;
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
