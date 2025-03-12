'use client';
import React, { useState, useEffect } from 'react';
import { CiGrid42, CiViewTable } from 'react-icons/ci';
import { fetchProducts } from '@/utils/fetchData';
import type {
  IProduct,
  TableColumnsType,
  ResponseDataWithLoadingAndError,
} from '@/lib/types';
import ProductTable from './ProductTable';
import ProductCardList from './ProductCardList';
const ProductList: React.FC = () => {
  const [view, setView] = useState<'table' | 'grid'>('grid');
  const [productData, setProductData] = useState({
    data: [] as IProduct[],
    message: '',
    isLoading: true,
    error: '',
  } as ResponseDataWithLoadingAndError<IProduct>);
  const tableHeaders: TableColumnsType[] = [
    { key: 'productId', label: 'ID' },
    { key: 'productName', label: 'NAME' },
    { key: 'productDescription', label: 'DESCRIPTION' },
    { key: 'price', label: 'PRICE' },
    { key: 'quantity', label: 'QTY' },
    { key: 'isProductAvailable', label: 'IS AVAILABLE' },
  ];
  useEffect(() => {
    fetchProducts()
      .then(({ data, message }: ResponseDataWithLoadingAndError<IProduct>) => {
        setProductData({
          data: data as IProduct[],
          isLoading: false,
          error: '',
          message: message,
        });
      })
      .catch((error: unknown) => {
        setProductData((prev) => ({
          ...prev,
          error: `Error fetching products: ${error}`,
          isLoading: false,
        }));
      });
  }, []);
  return (
    <div>
      <div className="w-100 flex items-center justify-end">
        <div className="icons flex w-[35px] justify-between items-center my-4">
          {/* if clicked in table -> display <ProductTable /> else <ProductCardList /> */}
          <button onClick={() => setView('table')} aria-label="table view">
            <CiViewTable
              className={view === 'table' ? 'active' : ''}
              size={24}
            />
          </button>
          <button onClick={() => setView('grid')} aria-label="grid view">
            <CiGrid42 className={view === 'grid' ? 'active' : ''} size={24} />
          </button>
        </div>
      </div>
      {view === 'table' ? (
        <ProductTable
          classNames="dark"
          data={productData}
          tableHeaders={tableHeaders}
        />
      ) : (
        <ProductCardList products={productData} />
      )}
    </div>
  );
};
export default ProductList;
