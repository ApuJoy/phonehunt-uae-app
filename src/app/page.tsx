import Container from "@/components/layout/Container";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturedPhones from "@/components/home/FeaturedPhones";
import TopBrands from "@/components/home/TopBrands";
import WhyChoose from "@/components/home/WhyChoose";
import LatestArticles from "@/components/home/LatestArticles";

export default function Home() {
  return (
    <main className="min-h-screen">
  <Container>
    <HeroSection />
    <SearchSection />
    <FeaturedPhones />
    <TopBrands />
    <WhyChoose />
    <LatestArticles />
  </Container>
</main>
  );
}