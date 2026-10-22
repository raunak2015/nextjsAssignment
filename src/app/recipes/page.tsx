"use client"
import { useState } from "react"
import { recipes } from "@/lib/data"
import RecipeCard from "@/components/recipeCard"

export default function Page() {
    const [search, setSearch] = useState("")
     const [currentpage, setCurrentpage] = useState(1);
     const limit = 8;
    const filteredData = recipes.filter((item) => {
        const title = item.title.toLowerCase().includes(search.toLowerCase());
        const cuisine = item.cuisine.toLowerCase().includes(search.toLowerCase());
        const difficulty = item.difficulty.toLowerCase().includes(search.toLowerCase());
        const category = item.category.toLowerCase() === search.toLowerCase();

        return title || cuisine || difficulty || category;
    });
     const totalPages = Math.ceil(filteredData.length / limit);
 const start = (currentpage - 1) * limit;
    const paginateddata = filteredData.slice(start, start + limit);
    const from = start + 1;
    const to =from+8;

    return (
        <main className="pl-25 pr-25">
            <section>
                <p className="mx-auto pt-1"><span className="text-gray-500 ">Home</span> / Recipes</p>
                <h1 className="text-4xl font-bold pb-1">All recipes</h1>
                <div className="flex justify-between pb-2.5"> <p>Browse everyday culinary formulas and kitchen staples by cuisine and prep time.</p> <div className="flex relative "> <p className="absolute right-51 top-1.5  "> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1z" />
                </svg></p> Showing 8 notebook entries
                </div></div>
                <hr className="border-amber-700 w-full " />
            </section>
            <section className="flex justify-between p-2 border-amber-700 border mt-4 mb-8 ">
                <div className="border border-amber-700  w-200 flex items-center ">

                    <label htmlFor="searchinput" className="relative  left-1.5 "><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
                    </svg>
                    </label>
                    <input id="searchinput" type="text" placeholder="Search recipes or ingredients..." value={search} onChange={(e) => { setSearch(e.target.value) }} className="w-full  pl-6" />
                </div>
                <div>
                    <label htmlFor="sort">Sort by: </label>
                    <select id="sort" className="border border-amber-700  p-1 ">
                        <option value="">Most resent</option>
                        <option value="">Most resent</option>
                        <option value="">Most resent</option>
                        <option value="">Most resent</option>
                        <option value="">Most resent</option>
                    </select>

                </div>
            </section>
            <section className="flex flex-wrap m-1 ">
                {
                    paginateddata.map((item) => (<RecipeCard recipe={item} key={item.id} />))
                }
            </section>

    <footer className="mt-10 flex items-center justify-between border-t border-[#cfd3e0] pt-6 text-[#5b6475] mb-3">
          <p>
            Showing{" "}
            <strong className="font-semibold text-[#111827]">
              {from}-{to}
            </strong>{" "}
            of{" "}
            <strong className="font-semibold text-[#111827]">
              {filteredData.length}
            </strong>{" "}
            Formulas total
          </p>

          <div className="flex gap-[0.6rem]">
            <button
              onClick={() => setCurrentpage((p) => p - 1)}
              disabled={currentpage === 1}
              className="rounded-sm border border-[#cfd3e0] bg-white px-[1.1rem] py-[0.55rem] text-[#5b6475] hover:border-[#5b6475] "
            >
              Previous
            </button>

            <button
              onClick={() => setCurrentpage((p) => p + 1)}
              disabled={totalPages === 0 || currentpage >= totalPages}
              className="rounded-sm border border-[#cfd3e0] bg-white px-[1.1rem] py-[0.55rem] text-[#5b6475] hover:border-[#5b6475] "
            >
              Next
            </button>
          </div>
        </footer>
        </main>
    )
}