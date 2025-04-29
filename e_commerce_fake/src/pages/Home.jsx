import { Link, Outlet } from "react-router";
import ProductDetails from "./ProductDetails";
import { useAllProducts } from "./AllProductsContext";
import { useOutletContext } from "react-router";

const Home = () => {
  const context = useAllProducts();
  const { products, loading, error } = context;
  const { cart, setCart } = useOutletContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">No products available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" ">
        <h1 className="text-6xl my-6 font-bold mb-4 text-black text-center">
          Our Products
        </h1>{" "}
        <ProductDetails shop={cart} setShop={setCart} />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
