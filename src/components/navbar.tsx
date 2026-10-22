import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-amber-800 border-b bg-white  ">
            <nav className="mx-auto flex items-center gap-8 px-6 py-4 justify-center">
                <Link href="/recipes" className="text-xl font-bold text-slate-900">Everyday Recipes</Link>
                <Link href="/recipes"className="">Recipes</Link>
                <Link href="/cuisines">Cuisines</Link>
                <Link href="/about">About</Link>
                <Link href="/addnew"className="ml-auto  text-sm sm:block bg-orange-700 text-amber-50 px-1.5">+ New Recipe</Link>
            </nav>
        </header>
    )
}


