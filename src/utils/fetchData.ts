import { environmentData, globalDataService } from '@/services/dataService';
import type {
  IMenuItem,
  IProduct,
  ResponseDataWithLoadingAndError,
  RequestGlobalDataParams,
} from '@/lib/types';
/**
 * Fetches product data from the test environment.
 *
 * This function attempts to retrieve product information using the environmentData service.
 * It specifically targets the "TestEnvironment" and requests "Product" data.
 *
 * @returns {Promise<ResponseDataWithLoadingAndError<IProduct>>} A promise that resolves to the fetched product data.
 * @throws {Error} If there's an error during the fetch operation, it logs the error and re-throws it.
 */
export async function fetchProducts(): Promise<
  ResponseDataWithLoadingAndError<IProduct>
> {
  try {
    const localProducts: ResponseDataWithLoadingAndError<IProduct> =
      await environmentData<ResponseDataWithLoadingAndError<IProduct>>(
        'TestEnvironment',
        'Product'
      );
    return localProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
/**
 *
 * @returns
 */
export async function fetchGlobalData(
  typeDataRequest: RequestGlobalDataParams
): Promise<ResponseDataWithLoadingAndError<IMenuItem>> {
  try {
    const localNavigationMenu: ResponseDataWithLoadingAndError<IMenuItem> =
      await globalDataService(typeDataRequest);
    return localNavigationMenu;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
