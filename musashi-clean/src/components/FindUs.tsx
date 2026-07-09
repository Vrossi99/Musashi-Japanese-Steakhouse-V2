import { motion } from 'framer-motion';

export function FindUs() {
  return (
    <section id="find-us" className="bg-[#080809] border-t border-washi/5 px-6 py-16 md:py-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <h3 className="font-serif text-gold text-xl md:text-2xl uppercase tracking-[0.2em] mb-4 md:mb-6">Location</h3>
            <div className="text-washi/80 space-y-1.5 text-[14px] md:text-[15px] leading-relaxed">
              <p>The Collective</p>
              <p>3900 Paradise Rd</p>
              <p>Las Vegas, NV 89169</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <a 
              href="https://maps.google.com/?q=Musashi+Japanese+Steakhouse+3900+Paradise+Rd+Las+Vegas+NV+89169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-ember text-[12px] md:text-[13px] uppercase tracking-widest hover:text-ember/80 transition-colors"
            >
              Get directions &rarr;
            </a>
            <p className="text-washi/50 text-[12px] md:text-[13px]">Free parking out front.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-8"
        >
          <h3 className="font-serif text-gold text-xl md:text-2xl uppercase tracking-[0.2em] mb-4 md:mb-6">Hours</h3>
          <ul className="text-washi/80 space-y-3 text-[14px] md:text-[15px] max-w-sm">
            <li className="flex justify-between border-b border-washi/10 pb-2">
              <span>Mon – Thu</span>
              <span className="text-gold">5 PM – 12 AM</span>
            </li>
            <li className="flex justify-between border-b border-washi/10 pb-2">
              <span>Fri – Sat</span>
              <span className="text-gold">5 PM – 1 AM</span>
            </li>
            <li className="flex justify-between border-b border-washi/10 pb-2">
              <span>Sun</span>
              <span className="text-gold">5 PM – 1 AM</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
