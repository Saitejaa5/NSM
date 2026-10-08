import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import MenuPreview from "./components/MenuPreview";
import FoodGallery from "./components/FoodGallery";
import WhyUs from "./components/WhyUs";
import WomenOwned from "./components/WomenOwned";
import Reviews from "./components/Reviews";
import Locations from "./components/Locations";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-3 focus:text-cream-50"
      >
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <MenuPreview />
        <FoodGallery />
        <WhyUs />
        <WomenOwned />
        <Reviews />
        <Locations />
        <CTA />
      </main>
      <Footer />
      <MobileCTA />
    </MotionConfig>
  );
}
