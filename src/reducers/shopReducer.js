export const shopReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST_PRODUCT":
      return { ...state, product: action.data };
    case "ADD_LIST_CART":
      return { ...state, cart: action.data };
    case "REMOVE_LIST_CART":
      return { ...state, cart: action.data };
    default:
      return state;
  }
};
