import type { ResponseData, IProduct } from "@/lib/types";
import { fetchData } from "@/services/dataService";
// import Product from "./Product";

export default async function CategoryList() {
  let dastaMessage = null;
  try {
    // Fetching categories from the API and storing it in the "products" variable
    const products: ResponseData<IProduct> = await fetchData<ResponseData<IProduct>>("Product");
    dastaMessage = products.message;
    // Logging the fetched categories to the console for debugging purposes
    console.log(products);
    return (
      <div>
        {/* temporary strucure, once UI lib has been installed, the structure will be updated */}
        {products?.data?.map(
          (product: IProduct | null, index: number) => (
            <p key={index}>{product?.productName}</p>
            // <Product key={index}
            //   productId={product?.productId}
            //   productName={product?.productName}
            //   productDescription={product?.productName}
            //   price={product?.price}
            //   quantity={product?.quantity}
            //   isProductAvailable={product?.isProductAvailable}
            //   productImages={product!.productImages}
            //   categories={product!.categories}
            // />
          )
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>{dastaMessage}</div>;
  }
}
