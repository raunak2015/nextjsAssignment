import React, { useState } from 'react'
import { students } from '@/data/directory';
import StudentCard from './StudentCard';


export default function StudentFilters() {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const filteredStudents = students.filter((student) => {
        const matchesName = student.name.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment = department === "All" || student.department === department;
        return matchesName && matchesDepartment;
    })
    return (
        <div className='w-full'>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search students by Name... '
                className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-slate-500'
            />

            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-64"
            >
                <option value="All">All Departments</option>

                {Array.from(
                    new Set(students.map((student) => student.department))
                ).map((name) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </select>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {
                    filteredStudents.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))
                }
            </div>
            <p className="mt-6 text-sm text-slate-500">
                Showing {filteredStudents.length} of {students.length} students
            </p>
        </div>
    )
}
