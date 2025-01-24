'use client';
import { useState, useEffect } from "react";
import { fetchProducts } from "@/utils/fetchData";
import type { IProduct, TableColumnsType, ResponseDataWithLoadingAndError, } from "@/lib/types";
import TableList from "@/ui/TableList";

export default function ProductList() {
  const [productData, setProductData] = useState({
    data: [] as IProduct[],
    message: '',
    isLoading: false,
    error: '',
  } satisfies ResponseDataWithLoadingAndError<IProduct>);
  const tableHeaders: TableColumnsType[] = [
    { key: 'productId', label: 'ID' },
    { key: 'productName', label: 'NAME' },
    { key: 'productDescription', label: 'DESCRIPTION' },
    { key: 'price', label: 'PRICE' },
    { key: 'quantity', label: 'QTY' },
    { key: 'isProductAvailable', label: 'IS AVAILABLE' },
  ]
  useEffect(() => {
    fetchProducts()
      .then(({data, message}: ResponseDataWithLoadingAndError<IProduct>) => {
        setProductData({
          data: data as IProduct[],
          isLoading: false,
          error: '',
          message: message,
        })
      })
      .catch((error: unknown) => {
        setProductData(prev => ({
          ...prev,
          error: `Error fetching products: ${error}`,
          isLoading: false,
        }))
      });
  });
  return (
    <TableList
      cssclasses="dark"
      data={productData}
      tableHeaders={tableHeaders}
    />
  );
}
