// import CategoryList from '@/components/category/CategoryList';
import { appConfig } from '@/data/app-data';
import ProductList from '@/components/product/ProductList';
import NavigationMenu from '@/components/navigation/NavigationMenu';
import FooterMenu from '@/components/navigation/FooterMenu';

export default function Home() {
  return (
    <div className="body-page">
      <NavigationMenu classNames="main-navigation" />
      <div className="flex items-center justify-items-center flex-col min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* TODO: Testing only, please update code */}
          {/* <CategoryList /> */}
          <ProductList />
        </main>
        <FooterMenu classNames="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white hover:text-white hover:opacity-100" />
      </div>
      <span className="absolute right-[1rem] bottom-0 text-white text-[10px] font-thin">
        VERSION: {appConfig.version}
      </span>
    </div>
  );
}
