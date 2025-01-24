import { UrlEndpointName, EnvironmentType, ResponseData, IProduct, ICategory } from "@/lib/types";
import ProductData from "@/data/app-products.json";
import CategoryData from "@/data/categories.json";

/**
 * Fetches data from a specified API endpoint.
 *
 * @template T - The expected type of the response data.
 * @param {UrlEndpointName} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<T>} A promise that resolves to the fetched data of type T.
 * @throws {Error} If the HTTP request fails or returns a non-OK status.
 */
export async function fetchData<T>(endpoint: UrlEndpointName): Promise<T> {
  try {
    const response: Response = await fetch(`${process.env.WEBAPI_ENDPOINT}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}
const fakeErrorMessage: ResponseData<Array<IProduct | ICategory | null>> = {
  message: "",
  data: []
}
/**
 * Retrieves data based on the specified environment type and endpoint.
 *
 * - If `environmentType` is "TestEnvironment", it returns mock data from local JSON files ("ProductData" or "CategoryData").
 * - If `environmentType` is "ProductionEnvironment" (default), it fetches data from the API endpoint specified in `process.env.WEBAPI_ENDPOINT`.
 *
 * @template T - The expected type of the response data.
 * @param {EnvironmentType} environmentType - The environment to retrieve data from ("ProductionEnvironment" or "TestEnvironment"). Defaults to "ProductionEnvironment".
 * @param {UrlEndpointName} endpoint - The API endpoint to fetch data from (e.g., "Product", "Category").
 * @returns {Promise<T>} A promise that resolves to the retrieved data.
 * @throws {Error} If an unknown endpoint is provided in "TestEnvironment" mode or if the data fetch fails in "ProductionEnvironment" mode.
 */
export async function environmentData<T>(environmentType: EnvironmentType = "ProductionEnvironment", endpoint: UrlEndpointName): Promise<T> {
  if (environmentType === "TestEnvironment") {
    switch(endpoint) {
      case "Product":
        return Promise.resolve({
          message: "loaded successfully",
          data: ProductData
        } as unknown as T);
      case "Category":
        return Promise.resolve({
          message: "loaded successfully",
          data: CategoryData
        } as unknown as T);
      default:
        throw new Error(`data returned empty: ${fakeErrorMessage}. Endpoint: ${endpoint}`);
    }
  }
  return await fetchData<T>(endpoint);
}
