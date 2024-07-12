import { ItemContext } from "@/contexts/itemContext";
import { useContext } from "react";

const ItemList = () => {
  const { item, resetItem, deleteItem } = useContext(ItemContext);

  return (
    <div className="w-full h-min border-2 border-gray-500 p-4 space-y-6 shadow-xl">
      <div className="flex justify-between">
        <h1 className="text-xl text-blue-800">List Item</h1>
        <button
          onClick={() => resetItem()}
          className="px-2 py-1 bg-yellow-600 text-white rounded-lg"
        >
          Reset Item
        </button>
      </div>
      {item.length > 0 ? (
        item.map((r, i) => (
          <div
            key={i}
            className="relative w-full bg-gray-500 p-4 rounded-lg border-2 border-gray-500"
          >
            <button
              onClick={() => deleteItem(i)}
              className="absolute -bottom-2 -right-2 px-4 py-1 rounded-full text-white text-sm bg-red-500 hover:bg-red-800"
            >
              Delete
            </button>
            <h1 className="text-lg font-extrabold text-blue-700">{r.name}</h1>
            <p className="text-base text-gray-800">{r.description}</p>
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

export default ItemList;
