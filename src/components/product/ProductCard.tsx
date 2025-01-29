import { Card, CardHeader, CardFooter, Image } from '@heroui/react';
import type { IProduct } from '@/lib/types';

interface Props {
  product: IProduct;
  cssClasses: string;
}
export default function ProductCard({ product, cssClasses }: Props) {
  const {
    productId,
    productName,
    productDescription,
    price,
    quantity,
    isProductAvailable,
    productImages,
    categories,
  } = product;
  return (
    <Card
      isFooterBlurred
      className={`w-full h-[300px] ${cssClasses}`}
      isPressable
      shadow="sm"
      onPress={() => console.log('pressed')}
      data-product-id={productId}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Top</p>
        <h4 className="text-black font-medium text-2xl">{productName}</h4>
        <span>
          {quantity} -{' '}
          {isProductAvailable ? 'product available' : 'product not available '}
        </span>
      </CardHeader>
      <Image
        removeWrapper
        alt={productName || 'Product Unknown'}
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={productImages[0]?.imageUrl || '/product-not-available.png'}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <div>{categories.map((c) => c?.categoryName)}</div>
          <p className="text-black text-tiny">{productDescription}</p>
        </div>
        <span className="text-tiny" color="primary">
          {price}
        </span>
      </CardFooter>
    </Card>
  );
}
