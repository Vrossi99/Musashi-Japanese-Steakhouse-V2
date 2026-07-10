import { Route, Switch, useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Reveal } from '@/components/Reveal';
import { Menu } from '@/components/Menu';
import { LateNight } from '@/components/LateNight';
import { Reviews } from '@/components/Reviews';
import { FindUs } from '@/components/FindUs';
import { ReserveOrder } from '@/components/ReserveOrder';
import { Footer } from '@/components/Footer';

// Home: hero experience — the full cinematic landing
function HomePage() {
  return (
    <div className="bg-sumi min-h-screen">
      <Hero />
      <Reveal />
      <Reviews />
      <Footer />
    </div>
  );
}

// Inner pages: content below the fixed nav bar
function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-sumi min-h-screen">
      <main className="pt-14">{children}</main>
      <Footer />
    </div>
  );
}

function MenuPage() {
  return (
    <InnerLayout>
      <Menu />
    </InnerLayout>
  );
}

function LateNightPage() {
  return (
    <InnerLayout>
      <LateNight />
    </InnerLayout>
  );
}

function FindUsPage() {
  return (
    <InnerLayout>
      <FindUs />
    </InnerLayout>
  );
}

function ReservePage() {
  return (
    <InnerLayout>
      <ReserveOrder />
    </InnerLayout>
  );
}

function NotFound() {
  return (
    <InnerLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6 text-center">
        <span className="font-serif text-gold text-[40px] tracking-[0.2em]">
          404
        </span>
        <p className="font-sans text-washi/70 text-[14px] tracking-wide">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="font-serif text-gold text-2xl hover:text-washi transition-colors"
        >
          Return Home
        </Link>
      </div>
    </InnerLayout>
  );
}

// Animated page transitions.
//
// Note: no AnimatePresence / mode="wait" here. That unmounts the outgoing page
// before mounting the incoming one, leaving a frame with nothing rendered. On
// mobile Safari that empty frame lands while `100dvh` is recalculating and
// shows as a black screen. A keyed fade-in remounts on route change without
// ever leaving a hole.
function AnimatedRoutes() {
  const [location] = useLocation();
  return (
    <motion.div
      key={location}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18, ease: 'easeInOut' }}
    >
      <Switch location={location}>
        <Route path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/late-night" component={LateNightPage} />
        <Route path="/find-us" component={FindUsPage} />
        <Route path="/reserve" component={ReservePage} />
        <Route component={NotFound} />
      </Switch>
    </motion.div>
  );
}

function App() {
  return (
    <>
      {/* Navigation is outside animated routes so it stays mounted */}
      <Navigation />
      <AnimatedRoutes />
    </>
  );
}

export default App;
