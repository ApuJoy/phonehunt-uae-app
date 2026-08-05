import Container from "@/components/layout/Container";
import HeroSection from "@/components/home/HeroSection";
import HomeContent from "@/components/home/HomeContent";

export default function Home() {
  return (
    <main className="min-h-screen">
  <Container>
    <HeroSection />
    <HomeContent />
  </Container>
</main>
  );
}