import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Theme from "./features/theme/Theme";

export default function App() {
  return (
    <>
      <div className="min-h-screen mx-auto dark:bg-slate-900/80 dark:text-white">
        <div className="container mx-auto pt-5">
          <Link
            to="/"
            className="p-1 text-lg text-blue-900 hover:text-white hover:bg-slate-900 bg-slate-400 hover:ring rounded mr-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="p-1 text-lg text-blue-900 hover:text-white hover:bg-slate-900 bg-slate-400 hover:ring rounded mr-2"
          >
            About
          </Link>
          <Theme className="p-1 text-lg text-blue-900 hover:text-white hover:bg-slate-900 bg-slate-400 hover:ring rounded" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
