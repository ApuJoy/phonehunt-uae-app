import { phones } from "@/data/phones";

export default function FeaturedPhones() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">Featured Smartphones</h2>
      <p className="mt-2 mb-8 text-gray-600">
        Explore popular and trending smartphones available in UAE.
      </p>

      <div className="space-y-4">
        {phones.map((phone) => (
          <div
          key={phone.id}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg"
        >
            <h3 className="text-xl font-bold text-slate-900">{phone.name}</h3>
            <p className="text-sm text-slate-500">{phone.brand}</p>
            <p className="text-lg font-bold text-slate-900">{phone.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}