import DiscoverCategory from "@/app/components/home/discover-genres";
import HeroSection from "@/app/components/home/hero";
import Newsletter from "@/app/components/home/newsletter";
import TopAuthor from "@/app/components/home/top-author.tsx";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <DiscoverCategory/>
      <TopAuthor/>
      <Newsletter/>
    </>
  );
}
