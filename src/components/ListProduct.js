import { ShopContext } from "@/contexts/shopContext";
import { useContext, useEffect } from "react";

const ListProduct = () => {
  const { stateShop, getProduct, addCart } = useContext(ShopContext);
  const { product } = stateShop;

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full h-min border-2 border-gray-200 p-4 space-y-6 shadow-xl">
      <h1 className="text-xl text-blue-900"> List Products</h1>
      {product.length > 0 ? (
        product.map((r, i) => (
          <div
            key={i}
            className="relative w-full bg-gray-400 p-4 rounded-lg border-2 border-gray-200"
          >
            <h1 className="text-lg font-extrabold text--blue-900">{r.name}</h1>
            <p className="text-base text-gray-400 ">{r.description}</p>
            <div className="flex justify-end">
              <button
                onClick={() => addCart(r)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Add Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full bg-red-500 p-4 rounded-lg border-2 border-gray-200 text-white">
          Data Item Belum Ada
        </div>
      )}
    </div>
  );
};

export default ListProduct;
