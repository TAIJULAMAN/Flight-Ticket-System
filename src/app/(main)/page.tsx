import Footer from "@/components/shared/Footer";
import ExclusiveFlight from "@/views/landing/ExclusiveFlight";
import FlightStat from "@/views/landing/FlightStat";
import HeroSection from "@/views/landing/HeroSection";
import NewsLetter from "@/views/landing/NewsLetter";
import SearchTopAirline from "@/views/landing/SearchTopAirline";
import TopPromotions from "@/views/landing/TopPromotions";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <TopPromotions />
      <FlightStat />
      <ExclusiveFlight />
      <SearchTopAirline />
      <NewsLetter />
      <Footer />
    </div>
  );
}
