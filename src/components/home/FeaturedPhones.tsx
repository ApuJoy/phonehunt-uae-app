
import { phones } from "@/data/phones";
import PhoneCard from "@/components/phones/PhoneCard";
type FeaturedPhonesProps = {
  search: string;
};

export default function FeaturedPhones({
  search,
}: FeaturedPhonesProps) {
  const filteredPhones = phones.filter((phone) => {
    return (
      phone.name.toLowerCase().includes(search.toLowerCase()) ||
      phone.brand.toLowerCase().includes(search.toLowerCase()) ||
      phone.type.toLowerCase().includes(search.toLowerCase())
    );
  });
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
          {filteredPhones.map((phone) => (
            <PhoneCard
            key={phone.id}
            phone={phone}
          />
          ))}
        </div>
        {filteredPhones.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-slate-300 p-10 text-center">
            <h3 className="text-xl font-semibold text-slate-700">
              No phones found
            </h3>

            <p className="mt-2 text-slate-500">
              Try searching with a different phone name or brand.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}