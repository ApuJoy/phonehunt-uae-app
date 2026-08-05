
import Link from "next/link";
import { phones } from "@/data/phones";
import Button from "../ui/Button";
import Image from "next/image";
type FeaturedPhonesProps = {
  search: string;
};

export default function FeaturedPhones({
  search,
}: FeaturedPhonesProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Smartphones
          </h2>

          <p className="mt-3 text-slate-600">
            Explore popular and trending smartphones available in UAE.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {phones
            .filter((phone) => {
              return (
                phone.name.toLowerCase().includes(search.toLowerCase()) ||
                phone.brand.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((phone) => (
              <div
                key={phone.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mb-5 flex h-48 items-center justify-center rounded-lg bg-slate-100">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    width={180}
                    height={180}
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    {phone.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{phone.name}</h3>
                <p className="text-sm text-slate-500">{phone.brand}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {phone.type}
                </p>
                <p className="text-lg font-bold text-slate-900">{phone.price}</p>
                <div className="mt-5">
                  <Link href={`/phones/${phone.slug}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}