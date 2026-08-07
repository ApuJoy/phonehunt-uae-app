import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";

type PhoneCardProps = {
  phone: {
    id: number;
    name: string;
    slug: string;
    brand: string;
    type: string;
    price: string;
    badge: string;
    image: string;
  };
};

export default function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <div
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

      <h3 className="text-xl font-bold text-slate-900">
        {phone.name}
      </h3>

      <p className="text-sm text-slate-500">
        {phone.brand}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {phone.type}
      </p>

      <p className="text-lg font-bold text-slate-900">
        {phone.price}
      </p>

      <div className="mt-5">
        <Link href={`/phones/${phone.slug}`}>
          <Button>
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}