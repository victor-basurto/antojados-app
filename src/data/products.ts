import { IProduct } from '@/lib/types';

const productData: IProduct[] = [
  {
    productId: 1,
    productName: 'Gomitas de Fresa',
    productDescription: 'Gomitas dulces de fresa y salsa dulce',
    price: 25,
    quantity: 50,
    isProductAvailable: true,
    productImages: [
      {
        productImageId: 2,
        imageUrl: '/products/gomita-gusano-enchilado.png',
        isPrimary: true,
      },
    ],
    categories: [
      {
        categoryName: 'Dulces',
        categoryId: 1,
        products: [],
      },
    ],
  },
  {
    productId: 2,
    productName: 'Paleta Payaso',
    productDescription: 'Paleta de caramelo macizo con forma de payaso',
    price: 15,
    quantity: 30,
    isProductAvailable: true,
    productImages: [
      {
        productImageId: 3,
        imageUrl: '/paleta_payaso.png',
        isPrimary: true,
      },
    ],
    categories: [
      {
        categoryName: 'Paletas',
        categoryId: 2,
        products: [],
      },
    ],
  },
  {
    productId: 3,
    productName: 'Chocolate Carlos V',
    productDescription: 'Barra de chocolate con leche',
    price: 18,
    quantity: 100,
    isProductAvailable: true,
    productImages: [
      {
        productImageId: 4,
        imageUrl: '/carlosv.png',
        isPrimary: true,
      },
    ],
    categories: [
      {
        categoryName: 'Chocolates',
        categoryId: 3,
        products: [],
      },
    ],
  },
  {
    productId: 4,
    productName: 'Mazapan de la Rosa',
    productDescription: 'Mazapan de cacahuate',
    price: 10,
    quantity: 60,
    isProductAvailable: false,
    productImages: [
      {
        productImageId: 5,
        imageUrl: '/products/extrme-ositos.jpg',
        isPrimary: true,
      },
    ],
    categories: [
      {
        categoryName: 'Dulces',
        categoryId: 1,
        products: [],
      },
    ],
  },
  {
    productId: 5,
    productName: 'Pulparindo',
    productDescription: 'Dulce de tamarindo enchilado',
    price: 12,
    quantity: 25,
    isProductAvailable: true,
    productImages: [
      {
        productImageId: 6,
        imageUrl: '/common/product-not-available.png',
        isPrimary: true,
      },
    ],
    categories: [
      {
        categoryName: 'Dulces',
        categoryId: 1,
        products: [],
      },
    ],
  },
  {
    productId: 6,
    productName: 'Pelon Pelo Rico',
    productDescription: 'Dulce de tamarindo enchilado liquido',
    price: 15,
    quantity: 40,
    isProductAvailable: true,
    productImages: [
      {
        productImageId: 7,
        imageUrl: '/pelon.png',
        isPrimary: true,
      },
    ],
    categories: [
      {
        categoryName: 'Dulces',
        categoryId: 1,
        products: [],
      },
    ],
  },
];

export default productData;
