
import Link from "next/link";
import { departments } from "@/data/directory";

export default function DepartmentsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Departments
        </h1>

        <p className="mt-2 text-slate-500">
          Explore academic departments and their specializations.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <article
            key={department.slug}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {department.name}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {department.description}
            </p>

            <div className="mt-5 flex gap-5 border-t border-slate-200 pt-4">
              <div>
                <p className="text-xl font-bold text-slate-900">
                  {department.specializations}
                </p>
                <p className="text-xs text-slate-500">
                  Specializations
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">
                  {department.enrolledStudents}
                </p>
                <p className="text-xs text-slate-500">
                  Students
                </p>
              </div>
            </div>

            <Link
              href={`/departments/${department.slug}`}
              className="mt-5 font-medium text-blue-600 hover:text-blue-800"
            >
              View department →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
