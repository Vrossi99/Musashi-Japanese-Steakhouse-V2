import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'wouter';

const NAV_LINKS = [
  { label: 'Home',            href: '/'           },
  { label: 'Menu',            href: '/menu'        },
  { label: 'Late Night',      href: '/late-night'  },
  { label: 'Find Us',         href: '/find-us'     },
  { label: 'Reserve & Order', href: '/reserve'     },
];

export function Navigation() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [atTop, setAtTop]         = useState(true);
  const [location] = useLocation();
  const overlayRef  = useRef<HTMLDivElement>(null);
  const triggerRef  = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setAtTop(window.scrollY < 60); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !overlayRef.current) return;
    const first = overlayRef.current.querySelector<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    first?.focus();
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !overlayRef.current) return;
    const focusable = Array.from(
      overlayRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, []);

  const openMenu = () => {
    triggerRef.current = document.activeElement as HTMLElement;
    setMenuOpen(true);
  };
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setTimeout(() => (triggerRef.current as HTMLElement | null)?.focus(), 300);
  }, []);

  const isHome = location === '/';
  const transparent = isHome && atTop && !menuOpen;

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[60]',
          'border-b transition-colors duration-500',
          transparent
            ? 'bg-transparent border-transparent'
            : 'bg-sumi/95 backdrop-blur-md border-washi/5',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-gold text-lg tracking-[0.2em] flex items-center gap-2 hover:text-gold/80 transition-colors"
          >
            {'\u6B66\u8535'}
            <div className="w-4 h-4 rounded-full border border-vermillion flex items-center justify-center text-vermillion shrink-0">
              <span className="font-serif text-[6px] leading-none">{'\u6B66\u8535'}</span>
            </div>
          </Link>

          <button
            onClick={menuOpen ? closeMenu : openMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
            className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45,  y: 7  } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-washi origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[1.5px] bg-washi origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-washi origin-center"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav-overlay"
            key="overlay"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleOverlayKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[59] bg-black flex flex-col pt-14"
          >
            <div className="absolute top-0 right-0 h-14 flex items-center px-5">
              <button
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              >
                <span className="block w-6 h-[1.5px] bg-washi origin-center rotate-45 translate-y-[3.5px]" />
                <span className="block w-6 h-[1.5px] bg-washi origin-center -rotate-45 -translate-y-[3.5px]" />
              </button>
            </div>

            <nav
              aria-label="Site sections"
              className="flex flex-col justify-center flex-1 px-8 md:px-20 gap-1"
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: i * 0.06 + 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline py-3 md:py-4 border-b border-washi/8 last:border-0"
                    >
                      <span className="font-serif text-washi/35 text-sm tracking-widest mr-5 w-6 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={[
                          'font-serif text-[2.25rem] md:text-5xl tracking-wide transition-colors duration-150',
                          isActive
                            ? 'text-gold'
                            : 'text-washi group-hover:text-gold',
                        ].join(' ')}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <span className="ml-auto text-vermillion text-xs" aria-hidden="true">
                          {'\u25CF'}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="px-8 md:px-20 pb-10 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+17027354744"
                className="flex-1 block bg-ember text-sumi font-medium py-4 text-center text-[13px] uppercase tracking-wider hover:bg-ember/90 transition-colors"
              >
                {'Reserve \u2014 Call (702) 735-4744'}
              </a>
              <a
                href="https://www.foodie-xpress.com/ordering/restaurant/menu?company_uid=63acd96b-a9f2-496a-9bc4-7f9709af2855&restaurant_uid=96df347f-18ef-40e8-a76e-fc9f29ea47f8&facebook=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 block border border-washi/20 text-washi py-4 text-center text-[13px] uppercase tracking-wider hover:border-washi/50 transition-colors"
              >
                {'Order Online \u2192'}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
