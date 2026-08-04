import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md">
      {children}
    </button>
  );
}