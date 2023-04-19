import { combineReducers } from "redux";

import {
  modalsReducer as modals,
  ordersReducer as orders,
} from "./modals/reducer";

export const rootReducer = combineReducers({ modals, orders });
