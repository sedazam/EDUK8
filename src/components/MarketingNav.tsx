import { Link } from "react-router-dom";

export default function MarketingNav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold">
          EduK8
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link to="/login" className="hover:underline">
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-primary px-4 py-2 text-white"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
