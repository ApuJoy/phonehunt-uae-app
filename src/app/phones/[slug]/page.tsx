import { notFound } from "next/navigation";
import { phones } from "@/data/phones";

type PhonePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PhonePage({ params }: PhonePageProps) {
  const { slug } = await params;

  const phone = phones.find((item) => item.slug === slug);

  if (!phone) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
        {phone.badge}
      </span>

      <h1 className="mt-6 text-4xl font-bold">{phone.name}</h1>

      <p className="mt-2 text-slate-600">{phone.brand}</p>

      <p className="text-slate-500">{phone.type}</p>

      <p className="mt-6 text-2xl font-bold text-blue-600">
        {phone.price}
      </p>
      <p className="mt-6 max-w-2xl leading-7 text-slate-600">
        {phone.description}
      </p>
      <div className="mt-8 grid gap-4 rounded-xl border border-slate-200 p-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-slate-500">Display</p>
          <p className="font-semibold">{phone.display}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Chip</p>
          <p className="font-semibold">{phone.chip}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Storage</p>
          <p className="font-semibold">{phone.storage}</p>
        </div>
      </div>
    </main>
  );
}