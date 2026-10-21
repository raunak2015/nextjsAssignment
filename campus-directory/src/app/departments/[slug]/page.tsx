    

import Link from "next/link";
import { notFound } from "next/navigation";
import { departments, specializations } from "@/data/directory";

type DepartmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return departments.map((department) => ({
    slug: department.slug,
  }));
}

export default async function DepartmentPage({
  params,
}: DepartmentPageProps) {
  const { slug } = await params;

  const department = departments.find(
    (item) => item.slug === slug
  );

  if (!department) {
    notFound();
  }

  const departmentSpecializations = specializations.filter(
    (item) => item.departmentSlug === slug
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10">
      <Link
        href="/departments"
        className="text-sm font-medium text-slate-500 hover:text-blue-600"
      >
        ← Back to departments
      </Link>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium text-blue-600">
          Academic Department
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {department.name}
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          {department.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-8 border-t border-slate-200 pt-5">
          <div>
            <p className="text-2xl font-bold text-slate-900">
              {department.specializations}
            </p>
            <p className="text-sm text-slate-500">Specializations</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-slate-900">
              {department.enrolledStudents}
            </p>
            <p className="text-sm text-slate-500">Enrolled students</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">
          Specializations
        </h2>

        <p className="mt-2 text-slate-500">
          Explore the areas of study within this department.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {departmentSpecializations.map((item) => (
            <article
              key={item.slug}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-semibold text-blue-600">
                {item.code}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <Link
                href={`/departments/${slug}/${item.slug}`}
                className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-800"
              >
                View specialization →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
