import { motion } from 'framer-motion';

export function LateNight() {
  return (
    <section id="late-night" className="bg-[#080809] border-y border-ember/20 text-center px-6 py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <div className="w-1 h-8 md:h-12 bg-ember mb-8 md:mb-12" />
        
        <h2 className="font-serif text-washi text-[26px] md:text-[44px] font-light leading-snug mb-5 md:mb-8">
          "The kitchen doesn't sleep on weekends."
        </h2>
        
        <p className="font-sans text-ember text-[12px] md:text-[13px] uppercase tracking-[0.2em]">
          Full teppan menu · Friday, Saturday & Sunday · till 1 AM
        </p>
      </motion.div>
    </section>
  );
}
