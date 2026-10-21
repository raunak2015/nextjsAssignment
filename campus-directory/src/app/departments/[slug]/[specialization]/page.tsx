import Link from "next/link";
import { notFound } from "next/navigation";
import {
  departments,
  getSpecialization,
  specializations,
} from "@/data/directory";

type SpecializationPageProps = {
  params: Promise<{ slug: string; specialization: string }>;
};

export function generateStaticParams() {
  return specializations.map((item) => ({
    slug: item.departmentSlug,
    specialization: item.slug,
  }));
}

export default async function SpecializationPage({
  params,
}: SpecializationPageProps) {
  const { slug, specialization: specializationSlug } = await params;
  const department = departments.find((item) => item.slug === slug);
  const specialization = getSpecialization(slug, specializationSlug);

  if (!department || !specialization) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-8">
      <Link
        href={`/departments/${department.slug}`}
        className="text-sm font-medium text-slate-500 hover:text-blue-600"
      >
        ← Back to {department.name}
      </Link>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          {specialization.code}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {specialization.name}
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          {specialization.description}
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Department
            </dt>
            <dd className="mt-2 font-medium text-slate-900">
              {department.name}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Program lead
            </dt>
            <dd className="mt-2 font-medium text-slate-900">
              {specialization.lead}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Lab
            </dt>
            <dd className="mt-2 font-medium text-slate-900">
              {specialization.lab}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">
              Academic cycle
            </dt>
            <dd className="mt-2 font-medium text-slate-900">
              {specialization.cycle}
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
