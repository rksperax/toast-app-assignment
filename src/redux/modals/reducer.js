import { handleActions } from "redux-actions";
import { modalsActions, orderActions } from "./actions";

const initialModalState = {
  show: "",
};

export const modalsReducer = handleActions(
  {
    [modalsActions.setShowModal]: (state, { payload }) => ({
      ...state,
      show: payload,
    }),
  },
  initialModalState
);

const initialOrderState = {
  orders: [],
};

export const ordersReducer = handleActions(
  {
    [orderActions.setOrder]: (state, { payload }) => ({
      ...state,
      orders: payload,
    }),
  },
  initialOrderState
);
