import Button from "@/components/ui/Button";

export default function SearchSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Search Smartphones
        </h2>

        <div className="flex gap-3">
        <input
  type="text"
  placeholder="Search by phone name..."
  className="flex-1 rounded-xl border border-slate-200 px-5 py-4 text-slate-700 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
/>

          <Button>Search</Button>
        </div>
      </div>
      </div>
    </section>
  );
}