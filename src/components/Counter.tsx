import { useState } from "react";

interface CounterProps {
  add?: number;
  minus?: string;
}

export default function Counter({ add, minus }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="flex justify-center">
        <div className="block text-center">
          <div className="m-3 p-4 font-bold text-lg">{count}</div>
          <button
            className="mr-2 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            onClick={() => setCount((state) => ++state)}
          >
            {add ?? "Add"}
          </button>
          <button
            className="bg-slate-600 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg dark:bg-red-500 dark:highlight-white/20 dark:hover:bg-red-400"
            onClick={() => setCount((state) => --state)}
          >
            {minus ?? "Minus"}
          </button>
        </div>
      </div>
    </>
  );
}
