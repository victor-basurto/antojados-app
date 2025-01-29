'use client';
import type { IProduct, ResponseDataWithLoadingAndError } from '@/lib/types';
// import UICardList from '@/ui/UICard';
interface Props {
  products: ResponseDataWithLoadingAndError<IProduct>;
  cssClasses?: string;
}
import ProductCard from './ProductCard';
export default function ProductCardList({ products, cssClasses }: Props) {
  if (products.isLoading) return <div>Loading...{products.message}</div>;
  if (products.error) return <div>Error: {products.error}</div>;
  if (!products.data || products.data.length === 0)
    return <div>No data available</div>;
  return (
    <div className={`gap-2 grid grid-cols-2 sm:grid-cols-4 ${cssClasses}`}>
      {products.data.map((item: IProduct | null, idx: number) => (
        <ProductCard
          key={idx}
          product={item ?? ({} as IProduct)}
          cssClasses={'dark'}
        />
      ))}
    </div>
  );
}
