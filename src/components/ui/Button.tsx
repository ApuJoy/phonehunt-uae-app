export default function Button({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <button className="rounded-lg bg-black px-5 py-2 text-white">
        {children}
      </button>
    );
  }