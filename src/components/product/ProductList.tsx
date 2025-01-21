'use client'
import type { ResponseData, IProduct } from "@/lib/types";
import { environmentData } from "@/services/dataService";
import {Button} from '@heroui/button';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@heroui/react";

export default async function CategoryList() {
  let dastaMessage = null;
  const tableHeaders = ['No.', 'Name', 'Description', 'Price', 'Qty', 'is available']
  try {
    // Fetching products from the API and storing it in the "products" variable
    const localProducts = await environmentData<ResponseData<IProduct>>("TestEnvironment", "Product");

    // Fetching products from the API Database SQL and storing it in the "products" variable
    // const products = await environmentData<ResponseData<IProduct>>("ProductionEnvironment", "Product");

    // success or fail message
    dastaMessage = localProducts.message;

    // Logging the fetched localProducts to the console for debugging purposes
    // console.log(localProducts);
    return (
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {tableHeaders.map((thead: string, index: number) => 
            <TableColumn key={index}>{thead}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          <TableBody>
              {localProducts.data!.map((product, idx) =>
                <TableRow key={idx}>
                  {(columnKey) => <TableCell>{getKeyValue(product, columnKey)}</TableCell>}
                </TableRow>
              )}
          </TableBody>
        </TableBody>
      </Table>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>{dastaMessage}</div>;
  }
}


{/* <div>
  temporary strucure, once UI lib has been installed, the structure will be updated
  {localProducts?.data?.map(
    (product: IProduct | null, index: number) => (
      <p key={index}>{product?.productName}</p>
      <Product key={index}
        productId={product?.productId}
        productName={product?.productName}
        productDescription={product?.productName}
        price={product?.price}
        quantity={product?.quantity}
        isProductAvailable={product?.isProductAvailable}
        productImages={product!.productImages}
        categories={product!.categories}
      />
    )
  )}
</div> */}