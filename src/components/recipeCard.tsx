
import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "@/Types/allTypes";

type Props = {
    recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
    return (
        <section className="flex   flex-wrap w-80 m-1 border border-[#e8b9aa] bg-white p-4 transition-colors ">

            <div className="relative h-50 w-full  ">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover p-1"
                />

                <span className="absolute bottom-2 right-2 z-10 flex items-center gap-1 border border-[#e8b9aa] bg-white px-2 py-1 text-xs font-medium ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-3.5 w-3.5 text-[#c8320b]"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                    </svg>

                    {recipe.prepTime} mins
                </span>
            </div>


            <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="border border-[#e8b9aa] bg-[#faf7ff] px-2 py-0.5 text-[11px] font-medium ">
                    {recipe.cuisine}
                </span>

                <span className="border border-[#e8b9aa] bg-[#faf7ff] px-2 py-0.5 text-[11px] font-medium ">
                    {recipe.difficulty}
                </span>
            </div>

            <div className="mt-2 min-w-0 mb-3">
                <h2 className=" text-[17px] font-semibold leading-6  text-[#171923]">
                    {recipe.title}
                </h2>

                <p className="mt-1  text-[13px]  text-[#593f36]">
                    {recipe.description}
                </p>
            </div>

            <div className=" flex items-center justify-between   w-full  ">
                <span className=" font-mono text-[12px] font-semibold  text-[#927365]">
                    REC-{String(recipe.id).padStart(2, "0")}
                </span>

                <Link
                    href={`/recipes/${recipe.id}`}
                    className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-[#b92708]  "
                >
                    View recipe

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                    >
                        <path d="M4 12h16m-7-7 7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
