import { ItemContext } from "@/contexts/itemContext";
import { useContext, useEffect, useState } from "react";

const ItemAdd = () => {
  const { item, addItem } = useContext(ItemContext);
  const [input, setInput] = useState({ name: "", description: " " });
  const [itemLocal, setItemLocal] = useState([]);

  useEffect(() => {
    setInput({ name: " ", description: " " });
  }, [item]);
  return (
    <div className="w-full h-min border-2 border-gray-200 p-4 space-y-2 shadow-xl">
      <h1 className="text-xl text-blue-700">FORM ITEM</h1>
      <input
        value={input.name}
        placeholder="name"
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        className="w-full rounded-lg py-2 px-4 text-black"
      />
      <textarea
        value={input.description}
        placeholder="description"
        onChange={(e) => setInput({ ...input, description: e.target.value })}
        className="w-full rounded-lg py-2 px-4 text-black"
      />
      <div className="flex justify-end">
        <button
          onClick={() => {
            addItem(input), setItemLocal([...itemLocal, input]);
          }}
          className="px-4 py-2 bg bg-green-600 text-white rounded-lg"
        >
          Add Item
        </button>
      </div>
      <p>global{JSON.stringify(item)}</p>
      <p>local{JSON.stringify(itemLocal)}</p>
    </div>
  );
};

export default ItemAdd;
