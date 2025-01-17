/**
 * Global
 */
export type ResponseData<T> = {
  message: string;
  data?: Array<T | null>;
};
export type UrlEndpointName = 'Category' | 'Product';
/**
 * Category
 */
export type CategoryName = {
  categoryName: string;
};
export interface ICategory extends CategoryName {
  categoryId: number;
  products: Array<IProduct | null>;
}
/**
 * ProductImage
 */
export interface IProductImages {
  productImageId: number;
  imageUrl: string;
  isPrimary: boolean;
}
/**
 * Product
 */
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
