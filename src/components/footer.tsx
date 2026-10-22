import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8b9aa] px-5 py-5">
      <div className="mx-auto flex w-290 flex items-center justify-between gap-4 ">
        <p className="text-sm text-[#593f36]">
          &copy; 2025 Everyday Recipes. Functional culinary notebook.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm">
          <Link
            href="/recipes"
            className="text-[#593f36] hover:text-[#c8320b] hover:underline"
          >
            Recipes
          </Link>

          <Link
            href="/techniques"
            className="text-[#593f36] hover:text-[#c8320b] hover:underline"
          >
            Techniques
          </Link>

          <Link
            href="/glossary"
            className="text-[#593f36] hover:text-[#c8320b] hover:underline"
          >
            Glossary
          </Link>

          <a
            href="https://github.com/devisingh2007/Recipe-Explorer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#593f36] hover:text-[#c8320b] hover:underline"
          >
            GitHub Repository 
          </a>
        </nav>
      </div>
    </footer>
  );
}