'use client';
import React from 'react';
import type {
  IProduct,
  ResponseDataWithLoadingAndError,
  ClassNames,
} from '@/lib/types';
import ProductCard from './ProductCard';
// import UICardList from '@/ui/UICard';
interface Props extends ClassNames {
  products: ResponseDataWithLoadingAndError<IProduct>;
}
const ProductCardList: React.FC<Props> = ({ products, classNames }) => {
  if (products.isLoading) return <div>Loading...{products.message}</div>;
  if (products.error) return <div>Error: {products.error}</div>;
  if (!products.data || products.data.length === 0)
    return <div>No data available</div>;
  return (
    <div className={`gap-2 grid grid-cols-2 sm:grid-cols-4 ${classNames}`}>
      {products.data.map((item: IProduct | null, idx: number) => (
        <ProductCard
          key={idx}
          product={item ?? ({} as IProduct)}
          classNames={'dark'}
        />
      ))}
    </div>
  );
};
export default ProductCardList;
