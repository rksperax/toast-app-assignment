import { SET_ORDER, SET_SHOW_MODAL } from "./action.types";

const initialState = {
  show: "",
  orders: [],
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_ORDER:
      return { ...state, orders: payload };
    case SET_SHOW_MODAL:
      return { ...state, show: payload };

    default:
      return state;
  }
};
export default reducer;
