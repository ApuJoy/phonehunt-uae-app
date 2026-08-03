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
            className="rounded-lg border p-4"
          >
            <h3 className="text-xl font-semibold">{phone.name}</h3>
            <p>{phone.brand}</p>
            <p>{phone.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}