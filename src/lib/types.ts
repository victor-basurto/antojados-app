/*-------------------------------------------------------
      GLOBAL
---------------------------------------------------------*/
/**
 * Static Global Data
 * AllowedBrakPoints - CSS breakpoints name
 * Breakpoints - breakpoints name and dimmension
 * SocialLinks - current available social links
 * IRootDetails - website information
*/
export type AllowedBreakPoints = "mobile" | "tablet" | "desktop" | "desktop-lg";
export type Breakpoints = Partial<Record<AllowedBreakPoints, number>>;
export type SocialLinks = Record<string, string>;
export interface IRootDetails {
  websiteName: string;
  defaultColorScheme: string;
  socialLinks: SocialLinks;
  breakPoints: Breakpoints;
  contactPhone: string;
  contactEmail: string;
  copyrightYear: number;
  version: string;
}
/**
 * Navigation and Footer Navigation
 * Global Data
 * IMenuItem,
 * IFooterItem
 */
export interface IMenuItem {
  link?: string;
  alt?: string;
  title?: string;
}
export type RequestGlobalDataParams = 'Global' | 'NavMenu' | 'FooterMenu';
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
};
export type UrlEndpointName = 'Category' | 'Product';
export type EnvironmentType = 'ProductionEnvironment' | 'TestEnvironment';
export type TableColsOptionType = 'key' | 'label';
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
