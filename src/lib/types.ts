import { IconType } from 'react-icons/lib';
/*-------------------------------------------------------
      GLOBAL
---------------------------------------------------------*/
/**
 * Static Global Data
 */
// AllowedBreakPoints - CSS breakpoints name
export type AllowedBreakPoints = 'mobile' | 'tablet' | 'desktop' | 'desktop-lg';
// Breakpoints - breakpoints name and dimension
export type Breakpoints = Partial<Record<AllowedBreakPoints, number>>;
// SocialLinks - current social links
export type SocialLinks = {
  title?: string;
  url?: string;
  icon?: IconType;
};
// IRootDetails - website information
export interface IRootDetails {
  websiteName: string;
  defaultColorScheme: string;
  socialLinks: SocialLinks[];
  breakPoints: Breakpoints;
  contactPhone: string;
  contactEmail: string;
  copyrightYear: string;
  version: string;
}
/**
 * Navigation and Footer Navigation
 * IMenuItem,
 */
export type ClassNames = {
  classNames?: string;
};
export interface IMenuItem extends ClassNames {
  link?: string;
  caption?: string;
  name?: string;
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
