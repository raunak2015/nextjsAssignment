
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/directory";

type StudentProfileProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return students.map((student) => ({
    id: student.id,
  }));
}

export default async function StudentProfile({
  params,
}: StudentProfileProps) {
  const { id } = await params;

  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-8">
      <Link
        href="/students"
        className="text-sm font-medium text-slate-500 hover:text-blue-600"
      >
        ← Back to students
      </Link>

      <section className="mt-6 rounded border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-700">
            {student.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {student.name}
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Student ID: {student.id}
            </p>
          </div>

          <span className="rounded border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-700">
            {student.status}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">
              Department
            </p>
            <p className="mt-2 font-medium text-slate-900">
              {student.department}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">
              Study Year
            </p>
            <p className="mt-2 font-medium text-slate-900">
              Year {student.year}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">
              Email
            </p>
            <a
              href={`mailto:${student.email}`}
              className="mt-2 block break-all text-blue-600 hover:underline"
            >
              {student.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">
              Enrollment
            </p>
            <p className="mt-2 font-medium text-slate-900">
              {student.enrolled}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6">
          <h2 className="text-lg font-semibold text-slate-900">
            About
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {student.about}
          </p>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Enrolled Subjects
          </h2>

          <div className="mt-4 divide-y divide-slate-200 rounded border border-slate-200">
            {student.subjects.map((subject) => (
              <div
                key={subject.name}
                className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-4"
              >
                <span className="text-sm font-medium text-slate-800">
                  {subject.name}
                </span>

                <span className="text-sm text-slate-500">
                  {subject.credits} Credits
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
