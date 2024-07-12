import { createContext, useState } from "react";

export const ItemContext = createContext();
const ItemContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState([]);

  const addItem = (input) => {
    setItem([...item, input]);
  };
  const deleteItem = (index) => {
    const newItem = item.filter((r, i) => {
      return i !== index;
    });
    setItem(newItem);
  };
  const resetItem = () => {
    setItem([]);
  };
  const ubahTitle = () => {
    setTitle([]);
  };
  return (
    <ItemContext.Provider
      value={{
        item,
        setItem,
        addItem,
        deleteItem,
        resetItem,
        title,
        ubahTitle,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
