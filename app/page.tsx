import AccentBanner from "./components/accent-banner";
import IntroSection from "./components/intro-section";
import MapSection from "./components/map-section";
import NetworkSection from "./components/network-section";
import ServiceList from "./components/service-list";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <div className="min-h-screen">
      {/* <HeroSlider /> */}
      <AccentBanner />
      <MapSection />
      <ServiceList />
      <IntroSection />
      <NetworkSection />
    </div>
  );
}
