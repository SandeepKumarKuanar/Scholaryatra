import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <HeroSection/>
      <StatsSection/>
    </div>
  );
}
