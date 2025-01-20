import type { ResponseData, ICategory } from "@/lib/types";
import { environmentData } from "@/services/dataService";

export default async function CategoryList() {
  let dataMessage = null;
  try {
    // Fetching categories from the API and storing it in the "categories" variable
    const localCategories = await environmentData<ResponseData<ICategory>>("TestEnvironment", "Category");
    
    // Fetching categories from the API Database SQL and storing it in the "categories" variable
    // const categories = await environmentData<ResponseData<ICategory>>("ProductionEnvironment", "Category");
    
    // set message to data
    dataMessage = localCategories.message;
    // Logging the fetched categories to the console for debugging purposes
    console.log(localCategories);
    return (
      <div className="max-w-lg w-full min-w-96 min-h-24">
        <ul className="flex flex-wrap justify-start items-center">
          {/* temporary strucure, once UI lib has been installed, the structure will be updated */}
          {localCategories?.data?.map(
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
    return <div>{dataMessage}</div>;
  }
}
