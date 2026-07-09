import { motion } from 'framer-motion';

export function Reviews() {
  return (
    <section className="bg-sumi text-center px-6 py-16 md:py-40">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <p className="font-serif italic text-gold text-[22px] md:text-[36px] font-light leading-snug">
            "Best hibachi I've been to by far. Not even close."
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-serif italic text-gold text-[22px] md:text-[36px] font-light leading-snug">
            "You walk past it and have no idea. That's exactly the point."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-8 md:pt-16 border-t border-washi/5"
        >
          <p className="font-sans text-[12px] md:text-[13px] text-washi/50 tracking-widest uppercase">
            4.5 ★ · 1,200+ reviews on Google
          </p>
        </motion.div>
      </div>
    </section>
  );
}
