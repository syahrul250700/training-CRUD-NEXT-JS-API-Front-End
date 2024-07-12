import { useState } from "react";

const Product = ({ name, description }) => {
  const [cart, setCart] = useState(0);
  return (
    <div className="flex flex-col w-full h-auto p-4 bg-gray-200 rounded-lg">
      <h1 className="text-lg font-extrabold text-blue-900">{name}</h1>
      <p className="text-base text-gray-500">{description}</p>
      <div className="flex justify-between w-full h-auto py-2">
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-lg hover:opacity-75"
          onClick={() => setCart(parseInt(cart - 1))}
        >
          -
        </button>
        <input
          value={cart}
          onChange={(e) => setCart(parseInt(e.target.value))}
          className="text-center rounded-xl text-black"
        />
        <button
          className="py-2 px-4 bg-green-600 text-white rounded-lg hover:opacity-75"
          onClick={() => setCart(parseInt(cart + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
