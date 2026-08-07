"use client";
import Button from "@/components/ui/Button";

type SearchSectionProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchSection({
  search,
  setSearch,
}: SearchSectionProps) {
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-xl border border-slate-200 px-5 py-4 text-slate-700 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <Button>
              Search Phones
            </Button>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="rounded-xl border border-slate-200 px-5 py-4 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}