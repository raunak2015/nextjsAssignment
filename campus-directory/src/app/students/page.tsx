 "use client"
import { useState } from "react";
import StudentCard from "@/components/StudentCard";
import {students} from "@/data/directory";
import StudentFilters from "@/components/StudentFilters";

export default function StudentsPage() {
    const [search, setSearch] = useState("");
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10">
        <section>
            <h1 className="text-2xl font-bold text-slate-900">
                Students
            </h1>
            <p className="text-lg text-slate-400 "> 
                Browse students and view their profiles.
            </p>
            <StudentFilters />
            <section className="gap-6 grid grid-cols-3">
                {students.map((student)=>(
                    <StudentCard key={student.id} student={student} />
                ))}
            </section>
        </section>
    </main>
  )
}
