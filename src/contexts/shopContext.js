const { shopReducer } = require("@/reducers/shopReducer");
const { useReducer, createContext } = require("react");

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialState = {
    product: [],
    cart: [],
  };
  const [stateShop, dispatch] = useReducer(shopReducer, initialState);
  const getProduct = () => {
    const data = [
      { id: 1, name: "Product 1", description: "Description 1" },
      { id: 2, name: "Product 2", description: "Description 2" },
      { id: 3, name: "Product 3", description: "Description 3" },
      { id: 4, name: "Product 4", description: "Description 4" },
    ];
    dispatch({ type: "SET_LIST_PRODUCT", data: data });
  };
  const addCart = (item) => {
    const cartIndex = stateShop.cart.findIndex((cart) => cart.id === item.id);
    if (cartIndex !== -1) {
      // jika item sudah ada dikeranjang, silahkan tambahkan qty
      const updatedQty = [...stateShop.cart];
      updatedQty[cartIndex].qty += 1;
      dispatch({ type: "ADD_LIST_CART", data: updatedQty });
    } else {
      // jika item belum ada dikeranjang, silahkan tambahkan item denga qty 1
      item.qty = 1;
      const data = [...stateShop.cart, item];
      dispatch({ type: "ADD_LIST_CART", data: data });
    }
  };
  const removeCart = (item) => {
    const cartIndex = stateShop.cart.findIndex((cart) => cart.id === item.id);
    const updatedQty = [...stateShop.cart];
    if (updatedQty[cartIndex].qty > 1) {
      if (cartIndex !== -1) {
        // jika item ada dikeranjang tambahkan qty
        updatedQty[cartIndex].qty -= 1;
        dispatch({ type: "REMOVE_LIST_CART", data: updatedQty });
      } else {
        // jika item ada dikeranjang, tambahkan item bary dengan qty 1
        item.qty = 1;
        const data = [...stateShop.cart, item];
        dispatch({ type: "REMOVE_LIST_CART", data: data });
      }
    } else {
      updatedQty.splice(cartIndex, 1);
      dispatch({ type: "REMOVE_LIST_CART", data: updatedQty });
    }
  };
  return (
    <ShopContext.Provider
      value={{ stateShop, dispatch, getProduct, addCart, removeCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
