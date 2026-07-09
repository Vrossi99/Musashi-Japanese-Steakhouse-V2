import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { menuData } from '@/data/menu';

// Exact pixel heights of the two fixed bars above the content
const MAIN_NAV  = 56;  // h-14
const SUB_NAV   = 44;  // py-3 top+bottom (24px) + text (16px) + borders (~4px)
const TRIGGER   = MAIN_NAV + SUB_NAV; // 100px — the line content must cross to become "active"

/** Center a sub-nav button inside its scrollable container (no scrollIntoView conflicts). */
function centerNavBtn(btn: HTMLElement, nav: HTMLElement) {
  const target = btn.offsetLeft - nav.offsetWidth / 2 + btn.offsetWidth / 2;
  nav.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
}

export function Menu() {
  const [activeSection, setActiveSection] = useState(menuData[0].id);
  const navRef        = useRef<HTMLDivElement>(null);
  const isClickingRef = useRef(false);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef        = useRef<number | null>(null);

  // ── Scroll-spy ────────────────────────────────────────────────────────
  // Uses getBoundingClientRect for real-time accuracy.
  // RAF-throttled so it runs at most once per frame regardless of scroll speed.
  const computeActive = useCallback(() => {
    if (isClickingRef.current) return;

    // Walk sections top-to-bottom; last one whose top is at or above TRIGGER wins.
    let next = menuData[0].id;
    for (const section of menuData) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= TRIGGER + 4) {
        next = section.id;
      }
    }

    setActiveSection(prev => {
      if (prev === next) return prev;
      const btn = document.getElementById(`nav-${next}`);
      if (btn && navRef.current) centerNavBtn(btn, navRef.current);
      return next;
    });
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;          // already queued
    rafRef.current = requestAnimationFrame(() => {
      computeActive();
      rafRef.current = null;
    });
  }, [computeActive]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    computeActive(); // sync on mount
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll, computeActive]);

  // Cleanup click timer
  useEffect(() => () => {
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
  }, []);

  // ── Click handler ─────────────────────────────────────────────────────
  const scrollToSection = useCallback((id: string) => {
    const el  = document.getElementById(id);
    const btn = document.getElementById(`nav-${id}`);
    if (!el) return;

    // 1. Highlight immediately
    setActiveSection(id);
    if (btn && navRef.current) centerNavBtn(btn, navRef.current);

    // 2. Calculate exact scroll target
    const targetY = el.getBoundingClientRect().top + window.scrollY - TRIGGER;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });

    // 3. Lock scroll-spy for the time the smooth scroll will take.
    //    Estimate: ~1px per ms at browser default, capped 250–900ms.
    const distance = Math.abs(el.getBoundingClientRect().top - TRIGGER);
    const lockMs   = Math.min(Math.max(distance * 0.55, 250), 900);

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    isClickingRef.current = true;
    clickTimerRef.current = setTimeout(() => {
      isClickingRef.current = false;
      clickTimerRef.current = null;
    }, lockMs);
  }, []);

  return (
    <section id="menu" className="bg-sumi text-washi relative pb-16 md:pb-24">

      {/* ── Sticky category bar ────────────────────────────────────────── */}
      <div className="sticky top-14 z-40 bg-sumi border-y border-washi/5">
        <div
          ref={navRef}
          className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex gap-5 md:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          {menuData.map((section) => {
            const active = activeSection === section.id;
            return (
              <button
                key={section.id}
                id={`nav-${section.id}`}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative text-[11px] md:text-[13px] uppercase tracking-widest
                  transition-colors duration-150 pb-2
                  ${active ? 'text-gold' : 'text-washi/45 hover:text-washi/75'}
                `}
              >
                {section.title}
                {active && (
                  <motion.div
                    layoutId="menu-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-vermillion"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {menuData.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="scroll-mt-28 mb-14 md:mb-24 last:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-gold text-xl md:text-2xl uppercase tracking-[0.2em] mb-3 md:mb-4">
                {section.title}
              </h2>
              <div className="w-10 h-[1px] bg-vermillion mb-7 md:mb-12" />

              <div className={`grid gap-x-16 gap-y-6 md:gap-y-10 ${section.items.length > 8 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-baseline w-full">
                      <span className={`text-[14px] md:text-[15px] font-medium tracking-wide ${item.signature ? 'text-gold' : 'text-washi'}`}>
                        {item.name}
                      </span>
                      <div className="dotted-leader" />
                      <span className="text-gold text-[14px] md:text-[15px] tracking-widest">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-[12px] md:text-[13px] text-washi/60 mt-1 md:mt-2 leading-relaxed max-w-[95%]">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

        <div className="mt-12 md:mt-32 pt-8 md:pt-12 border-t border-washi/10">
          <p className="text-washi/40 text-[11px] md:text-[12px] uppercase tracking-widest leading-relaxed">
            * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      </div>
    </section>
  );
}
