import Link from "next/link"
export default function notFound() {
    const data = [
        {
            "category": "Quick Prep",
            "title": "Vegetable Noodles",
            "description": "Sesame-scallion reduction with charred...",
            "cookingTime": "20 mins",
            "servings": "2 servings"
        },
        {
            "category": "Baking",
            "title": "Rustic Tomato Galette",
            "description": "Flaky spelt crust, herbed ricotta, heirloom...",
            "cookingTime": "55 mins",
            "servings": "4 servings"
        },
        {
            "category": "Japanese",
            "title": "Miso Glazed Eggplant",
            "description": "Caramelized red miso, mirin, toasted sesame...",
            "cookingTime": "30 mins",
            "servings": "2 servings"
        }
    ]

    return (
        <div>
            <div className="border-amber-700 flex pl-30 pt-2 pb-2 border-b">
                <p className="text-gray-500">Recipes / Index  &nbsp;</p><p className="text-amber-700"> / Not Found</p>
            </div>
            <div className=" border border-amber-500 mt-12 mb-12 ml-75 mr-75 p-10">
                <p className="bg-amber-200 w-fit p-1 text-amber-700 font-bold pl-1.5 pr-1.5 rounded">404 . Recipe or Cuisine Not Found</p>
                <h1 className="text-4xl font-bold mt-3 mb-3">Recipe not found</h1>
                <p className="text-amber-700 text-2xl mb-3">
                    The requested recipe path or cuisine category identifier could not be located in the Everyday Recipes index. The slug may have changed or the recipe has not been cataloged yet.
                </p>
                <div className="flex mt-7d pb-4 h-15">
                    <Link href="/" className="flex justify-center items-center bg-amber-700 text-white w-1/3 " ><svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1z" />
                    </svg> <p>Return to All Recipes</p>
                    </Link>

                    <Link className="flex justify-center items-center border border-amber-600 w-1/3 ml-3" href="/cuisines"><svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l-4 7h8zm2 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                    </svg><p>Browse Cuisines Directory</p>
                    </Link>
                </div>

                <hr className="border-amber-700 mt-5 mb-10" />
                <section>
                    <div className="flex justify-between font-semibold"><p>SUGGESTED ALTERNATIVES FROM THE NOTEBOOK</p> <p className="text-amber-600"> Indexed recently</p></div>
                    <div className="flex  ">
                        {data.map((item) => (
                            <div key={item.category} className="border-amber-600 p-5 mt-2 m-1 border">
                                <div className="flex justify-between mb-2"><p className="bg-amber-200 text-amber-700 pl-1 pr-1 text-center rounded font-semibold">{item.category}</p><p className="font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />
                                </svg>
                                </p></div>
                                <h2 className="text-3xl font-semibold">{item.title}</h2>
                                <p className="text-amber-700 mb-3">{item.description}</p>
                                <hr className="border border-amber-300" />
                                <div className="flex justify-between text-amber-800 "><p>{item.cookingTime}</p><p>{item.servings}</p></div>
                            </div>
                        ))}
                    </div>
                    <p className="border-b border-amber-700 pb-8 p-2 "/>

                    <div>
                        <div className="flex justify-between p-2"><p className="flex  text-amber-900 font-semibold"><svg className="translate-y-1 -translate-x-1"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                            <path d="M0 0h20v20H0z" fill="none" />
                            <path fill="currentColor" d="M5.646 9.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L7.293 11.5L5.646 9.854a.5.5 0 0 1 0-.708M14.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5V6H17v1h-.003v7.5a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5zm1 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7z" />
                        </svg> DIAGNOSTIC ROUTER TRACE
                        </p><p className=" text-amber-600">HTTP 404 handied gracefully</p></div>
                        <div className="border border-amber-700 p-3 ">
                            <p> &gt; Route pattern: <span className="text-amber-700">/recipes/[id]</span> unnatched slug: <span className="text-red-500">unknown-recipe-slug</span> </p>
                            <p> &gt; Next.js status: notFound() triggered inside page.tsx  </p>
                            <p className="text-amber-600"> &gt; HTTP 404 handled gracefully</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}