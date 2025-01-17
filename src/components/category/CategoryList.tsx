import type { ResponseData, ICategory } from "@/lib/types";
import { fetchData } from "@/services/dataService";

export default async function CategoryList() {
  let dastaMessage = null;
  try {
    // Fetching categories from the API and storing it in the "categories" variable
    const categories: ResponseData<ICategory> = await fetchData<ResponseData<ICategory>>("Category");
    dastaMessage = categories.message;
    // Logging the fetched categories to the console for debugging purposes
    console.log(categories);
    return (
      <div className="max-w-lg w-full min-w-96 min-h-24">
        <ul className="flex flex-wrap justify-start items-center">
          {/* temporary strucure, once UI lib has been installed, the structure will be updated */}
          {categories?.data?.map(
            (category: ICategory | null, index: number) => (
              <li className="p-2" key={index}>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {index + 1}: {category?.categoryName}
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div>{dastaMessage}</div>;
  }
}
