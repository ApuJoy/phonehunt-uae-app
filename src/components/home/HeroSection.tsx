import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Find Your Perfect Smartphone
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Discover phones, compare specifications, and make smarter buying
          decisions in the UAE.
        </p>

        <div className="mt-10">
          <Button>Browse Phones</Button>
        </div>
      </div>
    </section>
  );
}