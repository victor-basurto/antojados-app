import type { ResponseData, IProduct } from "@/lib/types";
import { environmentData } from "@/services/dataService";

export default async function CategoryList() {
  let dastaMessage = null;
  try {
    // Fetching products from the API and storing it in the "products" variable
    const localProducts = await environmentData<ResponseData<IProduct>>("TestEnvironment", "Product");

    // Fetching products from the API Database SQL and storing it in the "products" variable
    // const products = await environmentData<ResponseData<IProduct>>("ProductionEnvironment", "Product");

    // success or fail message
    dastaMessage = localProducts.message;

    // Logging the fetched localProducts to the console for debugging purposes
    console.log(localProducts);
    return (
      <div>
        {/* temporary strucure, once UI lib has been installed, the structure will be updated */}
        {localProducts?.data?.map(
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
