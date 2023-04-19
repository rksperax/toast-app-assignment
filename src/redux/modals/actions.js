import { createActions } from "redux-actions";

export const modalsActions = createActions(
  {
    // Sync
    SET_SHOW_MODAL: (state) => state,
  },
  {
    prefix: "modals",
    namespace: ".",
  }
);

export const orderActions = createActions(
  {
    // Sync
    SET_ORDER: (state) => state,
  },
  {
    prefix: "orders",
    namespace: ".",
  }
);
