import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to improve initial page load speed
const Philosophy = lazy(() => import('./components/Philosophy'));
const MenuGrid = lazy(() => import('./components/MenuGrid'));
const Gallery = lazy(() => import('./components/Gallery'));
const ReservationForm = lazy(() => import('./components/ReservationForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-sage selection:text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-24 w-full bg-cream"></div>}>
        <Philosophy />
        <MenuGrid />
        <Gallery />
        <ReservationForm />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
