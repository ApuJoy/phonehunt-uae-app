import Link from "next/link";
import { phones } from "@/data/phones";

export default function PhonesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">All Smartphones</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {phones.map((phone) => (
          <Link
            key={phone.id}
            href={`/phones/${phone.slug}`}
            className="rounded-xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">{phone.name}</h2>

            <p className="mt-2 text-slate-600">{phone.brand}</p>

            <p className="text-slate-500">{phone.type}</p>

            <p className="mt-4 font-bold text-blue-600">
              {phone.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}