import DiscoverCategory from "@/app/components/home/discover-genres";
import TopAuthor from "@/app/components/home/top-author.tsx";
import WhyChoose from "@/app/components/home/why-choose";

export default function Home() {
  return (
    <>
      <WhyChoose />
      <DiscoverCategory />
      <TopAuthor />
    </>
  );
}