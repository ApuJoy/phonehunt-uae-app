import { notFound } from "next/navigation";
import { phones } from "@/data/phones";
import PhoneCard from "@/components/phones/PhoneCard";

type BrandPageProps = {
  params: Promise<{
    brand: string;
  }>;
};

export default async function BrandPage({
  params,
}: BrandPageProps) {
  const { brand } = await params;

  const brandPhones = phones.filter(
    (phone) =>
      phone.brand.toLowerCase() === brand.toLowerCase()
  );

  if (brandPhones.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">
        {brand} Smartphones
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {brandPhones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
          />
        ))}
      </div>
    </main>
  );
}