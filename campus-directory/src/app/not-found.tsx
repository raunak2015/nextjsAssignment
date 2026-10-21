
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-semibold text-blue-600">
        404 · PAGE NOT FOUND
      </p>

      <h1 className="text-3xl font-bold text-slate-900">
        Page not found
      </h1>

      <p className="max-w-md text-slate-600">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/students"
        className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
      >
        Return to Students
      </Link>
    </main>
  );
}
