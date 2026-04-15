import CCTVHeroSection from "./components/CCTVHeroSection";
import CCTVAboutSection from "./components/CCTVAboutSection";
import CCTVTestimonialSection from "./components/CCTVTestimonialSection";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <main>
      <CCTVHeroSection />
      <CCTVAboutSection />
      <CCTVTestimonialSection />
      <MapSection />
    </main>
  );
}
