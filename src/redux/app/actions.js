import { SET_ORDER, SET_SHOW_MODAL } from "./action.types";

export const setShowModal = (payload) => ({ type: SET_SHOW_MODAL, payload });
export const setOrder = (payload) => ({ type: SET_ORDER, payload });
