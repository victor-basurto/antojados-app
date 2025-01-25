/*-------------------------------------------------------
      GLOBAL
---------------------------------------------------------*/
//  (IProduct|ICategory|null) and message (string)
/**
 * ResponseData returns { data, message }
 */
export type ResponseData<T> = {
  data?: Array<T | null>;
  message: string;
};
/**
 * returns ResponseData along with isLoading and error { data, message, isLoading, error }
 */
export type ResponseDataWithLoadingAndError<T> = ResponseData<T> & {
  isLoading: boolean;
  error?: string;
}
export type UrlEndpointName = "Category" | "Product";
export type EnvironmentType = "ProductionEnvironment" | "TestEnvironment";
export type TableColsOptionType = "key" | "label";
export type TableColumnsType = Record<TableColsOptionType, string>;
/*-------------------------------------------------------
      CATEGORY
---------------------------------------------------------*/
/**
 * ICategory { categoryId, categoryName, products }
*/
export type CategoryName = {
  categoryName: string;
};
export interface ICategory extends CategoryName {
  categoryId: number;
  products: Array<IProduct | null>;
}
/*-------------------------------------------------------
      PRODUCTIMAGE
---------------------------------------------------------*/
export interface IProductImages {
  productImageId: number;
  imageUrl: string;
  isPrimary: boolean;
}
/*-------------------------------------------------------
      PRODUCT
---------------------------------------------------------*/
export interface IProduct {
  productId?: number;
  productName?: string;
  productDescription?: string;
  price?: number;
  quantity?: number;
  isProductAvailable?: boolean;
  productImages: Array<IProductImages | null>;
  categories: Array<ICategory | null>;
}
