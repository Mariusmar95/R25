import Banner from "../components/Banner";
import MenuFilter from "../components/MenuFilter";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../hooks/useProducts";

const OrderMenu = () => {
  const { products, setProducts, allProducts, error, loading, handleFilter } =
    useProducts();

  return (
    <div className="relative">
      {/* Banner */}
      <Banner imageSrc="/src/assets/banner4.jpg " />

      {/* Menu content container */}
      <div className="container mx-auto px-4 lg:relative">
        {/* Sidebar */}
        <MenuFilter
          allProducts={allProducts}
          setProducts={setProducts}
          handleFilter={handleFilter}
        />

        <div className="flex flex-col lg:flex-row">
          {/* Empty div space sidebar*/}
          <div className="hidden lg:block lg:w-80 lg:flex-shrink-0"></div>

          {/* Menu Items Section */}
          <ProductGrid products={products} error={error} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
