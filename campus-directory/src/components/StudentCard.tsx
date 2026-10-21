import Link from "next/link";
import { students } from "@/data/directory";

type Student = (typeof students)[number];

type StudentCardprops = {
    student: Student;
}

export default function StudentCard({
    student,
}: StudentCardprops) {
    return (
        <article className="rounded border border-slate-300 bg-white p-5">
            <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                    {
                        student.name.split(" ").map((part) => part[0]).slice(0, 2).join("")
                    }
                </span>
                <span className="rounded border border-slate-300 bg-slate-50 px-2 py-1 text-xs text-slate-600">
                    {student.id}
                </span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
                {student.name}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span className="rounded border border-blue-200 bg-blue-50 px-2 py-1 text-blue-700">
                    {student.department}
                </span>

                <span>
                    {student.year}
                    {student.year === 1
                        ? "st"
                        : student.year === 2
                            ? "nd"
                            : student.year === 3
                                ? "rd"
                                : "th"}{" "}
                    Year
                </span>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4">
                <Link
                    href={`/students/${student.id}`}
                    className="font-medium text-blue-600 hover:text-blue-800"
                >
                    View profile →
                </Link>
            </div>


        </article>
    )
}
