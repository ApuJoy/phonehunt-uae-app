import { phones } from "@/data/phones";
import Button from "../ui/Button";

export default function FeaturedPhones() {
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
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-48 items-center justify-center rounded-lg bg-slate-100">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
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
                <Button>View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}