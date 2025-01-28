// import { Button, Card, Image, Text } from "@chakra-ui/react"
// import type {  IProduct, ICategory } from "@/lib/types";
// import { Provider } from "../ui/provider";

export default async function Product(
  {
    // productId,
    // productName,
    // productDescription,
    // price,
    // quantity,
    // isProductAvailable,
    // productImages,
    // categories,
  }
) {
  return (
    // <Provider>
    // <Card.Root maxW="sm" overflow="hidden">
    {
      /* <Image
          src={productImages[0]?.imageUrl}
          alt={productName}
        />
        <Card.Body gap="2">
          <Card.Title>{productName}</Card.Title>
          <Card.Description>{productDescription}</Card.Description>
          {categories.map((category:  ICategory | null, index: number) => (
            <Text key={index} color="gray.700">
              {category?.categoryName}
              ${price}
              qty: ${quantity}
              Available: ${isProductAvailable ? "yes" : "no"}
              Product Id:: ${productId}
            </Text>
          ))}
        </Card.Body>
        <Card.Footer>
          <Button variant="ghost">more details</Button>
        </Card.Footer> */
    }
    // </Card.Root>
    // </Provider>
  );
}
