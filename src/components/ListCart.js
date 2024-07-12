import { ShopContext } from "@/contexts/shopContext";
import { useContext } from "react";

const ListCart = () => {
  const { stateShop, addCart, removeCart } = useContext(ShopContext);
  const { cart } = stateShop;
  return (
    <div className=" w-full h-min border-2 borrder-gray-200 p-4 space-y-6 shadow-xl">
      <h1 className="text-lg font-extrabold text-blue-900">List Cart</h1>
      {cart.length > 0 ? (
        cart.map((r, i) => (
          <div
            key={i}
            className="relative w-full bg-gray-100 p-4 rounded-lg border-2 border-gray-200"
          >
            <h1 className="text-lg font-extrabold text-blue-900 ">{r.name}</h1>
            <p className="text-base text-gray-500 ">{r.description}</p>
            <div className="flex items-center justify-end space-x-4">
              <button
                className="py-2 w-10 rounded-md hover:opacity-80 bg-red-500 text-white"
                onClick={() => removeCart(r)}
              >
                -
              </button>
              <div className=" py-2 w-12 text-center">
                <p className="text-blue-900 font-bold text-2xl">{r.qty}</p>
              </div>
              <button
                className="py-2 w-10 rounded-md hover:opacity-80 bg-green-500 text-white"
                onClick={() => addCart(r)}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full bg-red-500 p-4 rounded-lg border-2 border-gray-200 text-white">
          Data Cart Belum Ada
        </div>
      )}
    </div>
  );
};

export default ListCart;
