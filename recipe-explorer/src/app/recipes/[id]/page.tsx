import { recipes } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipeDetailsPage({ params }: Props) {
  const { id } = await params;
  const data = recipes.find((item) => item.id === id);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f8ff] text-[#171923]">
     
      <div className="border-b border-[#e8c7b9]">
        <div className="mx-auto flex max-w-275 items-center justify-between gap-3 px-5 py-3 text-xs ">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/recipes" className="hover:text-[#c92d0b]">
              Recipes
            </Link>
            <span className="text-[#d7a998]">/</span>
            <span>{data.cuisine}</span>
            <span className="text-[#d7a998]">/</span>
            <span>{data.title}</span>
          </div>

          <Link
            href="/recipes"
            className="hover:text-[#c92d0b]"
          >
            ← <span >Back to recipes</span>
            <span >Back</span>
          </Link>
        </div>
      </div>

      
      <div className="mx-auto max-w-275 px-5">
        <section className="grid gap-8 border-b border-[#e8c7b9] py-8 md:grid-cols-[1fr_230px] md:items-start">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-[#906957]">
              <span className="border border-[#e8b6a4] px-2 py-1 text-[#a52a12]">
                Entry #{String(data.id).padStart(3, "0")}
              </span>
              <span>Culinary Notebook</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight ">
              {data.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#56372e] ">
              {data.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t  border-[#e8c7b9] pt-4 text-sm">
              <p>
                <span className="text-[#906957]">Cuisine:</span>{" "}
                {data.cuisine}
              </p>
              <p>
                <span className="text-[#906957]">Prep time:</span>{" "}
                {data.prepTime} mins
              </p>
              <p>
                <span className="text-[#906957]">Difficulty:</span>{" "}
                {data.difficulty}
              </p>
              <p>
                <span className="text-[#906957]">Servings:</span>{" "}
                {data.servings} portions
              </p>
            </div>
          </div>

          <figure className="border border-[#e8c7b9] bg-white p-1.5">
            <Image
              src={data.image}
              alt={data.title}
               width={810}
    height={810}
              className="h-40 w-full object-cover"
            />
            <figcaption className="flex items-center justify-between gap-2 px-1 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#906957]">
              <span>Fig 1.0 — Plated Prep</span>
              <span>Recipe</span>
            </figcaption>
          </figure>
        </section>

        <section className="grid items-start gap-6 py-6 md:grid-cols-[345px_minmax(0,1fr)]">
          <div className="border border-[#e8bfb0] bg-white p-4">
            <div className="flex items-center justify-between gap-3 border-b border-[#e8c7b9] pb-4">
              <h2 className="text-xl font-semibold">Ingredients</h2>
              <span className="text-xs text-[#906957]">
                {data.ingredients.length} Items
              </span>
            </div>

            <div className="mt-3 flex justify-between bg-[#f0f1fc] px-2 py-2 text-xs">
              <span className="font-semibold">
                Yield: {data.servings} portions
              </span>
              <span className="text-[#906957]">Scale: 1.0×</span>
            </div>

            <ul className="mt-4 space-y-3">
              {data.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3 text-sm leading-6">
                  <input
                    type="checkbox"
                    id={`ingredient-${index}`}
                    className="mt-1 h-4 w-4  accent-[#c92d0b]"
                  />
                  <label
                    htmlFor={`ingredient-${index}`}
                    className=""
                  >
                    {ingredient}
                  </label>
                </li>
              ))}
            </ul>

            <p className="mt-5 border-t  border-[#e8c7b9] pt-3 text-xs leading-5 text-[#906957]">
              Tip: Check off items as you prepare your ingredients.
            </p>
          </div>

          <div className="border border-[#e8bfb0] bg-white p-5 ">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8c7b9] pb-4">
              <h2 className="text-xl font-semibold">
                Methodology &amp; Execution
              </h2>
              <span className="text-xs text-[#906957]">
                {data.instructions.length} Sequential Steps
              </span>
            </div>

            <ol>
              {data.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 border-b border-[#f0ded7] py-6 "
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center border text-xs font-medium `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm font-medium">
                      Step {index + 1}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#292b35]">
                      {instruction}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e8c7b9] pt-4 text-xs">
              <span className="text-[#906957]">
                <span className="mr-1 text-[#c92d0b]">●</span>
                Recipe preparation guide
              </span>

              <Link
                href={``}
                className="font-medium text-[#b5260c] "
              >
                Edit recipe →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
