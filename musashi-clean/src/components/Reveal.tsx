import { motion } from 'framer-motion';

export function Reveal() {
  return (
    <section className="bg-sumi text-gold px-6 py-16 md:py-48 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl text-center flex flex-col gap-5 md:gap-8"
      >
        <p className="font-serif text-[22px] md:text-[40px] leading-snug font-light">
          "Behind an unmarked door in The Collective — fire, steel, and the best hibachi in Vegas."
        </p>
        <p className="font-sans text-washi/70 text-[13px] md:text-[16px] max-w-xl mx-auto tracking-wide">
          Every sauce built from scratch. Every cut finished on the grill in front of you.
        </p>
      </motion.div>
    </section>
  );
}
