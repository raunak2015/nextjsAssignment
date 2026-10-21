import Link from "next/link"


export default function Navbar() {
    return (
        <header className="w-full border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 sm:flex-nowrap">
                <Link
                    href="/students"
                    className="flex items-center gap-2 text-xl font-bold text-slate-900"
                >
                    <span className="text-blue-600">◆</span>
                    <span>Campus Directory</span>
                </Link>

                <nav className="ml-10 flex items-center gap-6 text-sm font-medium text-slate-600">
                    <Link href="/students" className="hover:text-blue-600">
                        Students
                    </Link>
                    <Link href="/departments" className="hover:text-blue-600">
                        Departments
                    </Link>
                        <Link href="/About" className="hover:text-blue-600">
                        About
                    </Link>
                </nav>
                <span className="ml-auto rounded border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-600">
                    Frontend Practice
                </span>

            </div>
        </header>
    );
}
