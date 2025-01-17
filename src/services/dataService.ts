import { UrlEndpointName } from "@/lib/types";

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
