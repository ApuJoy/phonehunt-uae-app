export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
  PhoneHunt <span className="text-blue-600">UAE</span>
      </h1>

       <nav className="flex items-center gap-8 text-sm font-medium">
        <a href="#"className="transition-colors duration-200 hover:text-blue-600">
        Phones
        </a>

        <a href="#" className="transition-colors duration-200 hover:text-blue-600">
        Brands
        </a>

        <a href="#" className="transition-colors duration-200 hover:text-blue-600">
        Compare
        </a>
        </nav>
      </div>
    </header>
  );
}