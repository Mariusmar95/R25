import Banner from "../components/Banner";
import MenuFilter from "../components/MenuFilter";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const OrderMenu = () => {
  const { products, setProducts, allProducts, error, loading, handleFilter } =
    useProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/*Banner*/}
      <Banner imageSrc="/banner4.jpg" />

      {/*Menu container*/}
      <div className="mx-auto px-4 py-8 container">
        <div className="flex lg:flex-row flex-col gap-6">
          {/*Sidebar*/}
          <MenuFilter
            allProducts={allProducts}
            setProducts={setProducts}
            handleFilter={handleFilter}
          />

          {/*Menu Items Section*/}
          <div className="z-10 flex-1">
            <ProductGrid products={products} error={error} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
