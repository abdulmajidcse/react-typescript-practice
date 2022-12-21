import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <div className="min-h-screen mx-auto dark:bg-slate-900/80 dark:text-white">
        <h2 className="text-3xl font-bold underline text-center pt-10">
          Hello React Typescript
        </h2>
        <Counter />
      </div>
    </>
  );
}
