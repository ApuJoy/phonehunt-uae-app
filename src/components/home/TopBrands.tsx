import Link from "next/link";

const brands = [
  {
    name: "Apple",
    slug: "apple",
  },
  {
    name: "Samsung",
    slug: "samsung",
  },
  {
    name: "Google",
    slug: "google",
  },
];

export default function TopBrands() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-slate-900">
        Top Smartphone Brands
      </h2>

      <p className="mt-3 text-slate-600">
        Explore smartphones from the world&apos;s leading brands.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {brand.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              View {brand.name} phones
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}