import { ADD_PRODUCT_WISH_LIST, REMOVE_PRODUCT_WISH_LIST, WishListActions } from "./whishlist.action";
const initialValue = {
  product: [],
};

export function WhishListReducer(state = initialValue, action: WishListActions) {
  switch (action.type) {
    case ADD_PRODUCT_WISH_LIST: {
      return {
        ...state,
        product: [...state.product, action.payload],
      }
    };
      case REMOVE_PRODUCT_WISH_LIST: {
      return {
        product: action.payload,
      }
    };
    default:
      return state;
  }
}

