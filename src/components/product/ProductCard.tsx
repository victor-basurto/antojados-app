'use client';
import { useState } from 'react';
import { Card, CardHeader, CardFooter, Image } from '@heroui/react';
import { useDisclosure } from '@heroui/react';
import type { ClassNames, IProduct } from '@/lib/types';
import UIModal from '@/ui/UIModal';

interface Props extends ClassNames {
  product: IProduct;
}
const ProductCard: React.FC<Props> = ({ product, classNames }: Props) => {
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleOpenModal = () => {
    setSelectedProduct(product);
    onOpen();
  };
  return (
    <>
      <Card
        isFooterBlurred
        className={`w-full h-[300px] ${classNames} card-item`}
        isPressable
        shadow="sm"
        data-product-id={productId}
        onPress={handleOpenModal}
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Top</p>
          <h4 className="text-black font-medium text-2xl">{productName}</h4>
          <span>
            {quantity} -{' '}
            {isProductAvailable
              ? 'product available'
              : 'product not available '}
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
      {/* modal component */}
      {selectedProduct && (
        <UIModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames="p-4"
          title={selectedProduct.productName ?? 'no title'}
          description={selectedProduct?.productDescription ?? 'no description'}
        />
      )}
    </>
  );
};
export default ProductCard;
