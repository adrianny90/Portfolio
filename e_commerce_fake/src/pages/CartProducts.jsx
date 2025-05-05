import Button from "../components/Button";
import { useState, useEffect } from "react";
import { removeFromCart } from "../utils/helpers";

const CartProducts = ({ shop, setShop }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalPrice = shop.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setPrice(totalPrice);
  }, [shop]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {shop.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-700 md:text-xl">
          Your cart is empty
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {shop.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center bg-blue-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-full sm:w-40 bg-white rounded-lg overflow-hidden">
                <figure className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-48 sm:h-36 transition-transform duration-300 hover:scale-105"
                  />
                </figure>
              </div>

              <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl text-white font-semibold truncate md:text-2xl">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-lg text-white font-bold mt-2 md:text-xl">
                    {product.price} €
                  </p>
                </div>

                <div className="flex justify-center sm:justify-start gap-3 mt-4">
                  <Button
                    product={product}
                    shop={shop}
                    setShop={setShop}
                    className="btn bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  />
                  <button
                    onClick={() =>
                      removeFromCart({ shop, setShop }, product.id)
                    }
                    className="btn bg-transparent text-white border border-gray-300 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    aria-label={`Remove ${product.title} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center text-xl font-bold text-blue-900 mt-8 md:text-2xl">
            Total Price: {price.toFixed(2)} €
          </div>
        </div>
      )}
    </div>
  );
};
export default CartProducts;
