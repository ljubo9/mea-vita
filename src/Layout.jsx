import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
