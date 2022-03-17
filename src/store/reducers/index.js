import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import adminReducer from "./adminReducer";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

export const rootReducer = combineReducers({
  lnkr: adminReducer,
});
const configStorage = {
  key: "root",
  storage,
  // stateReconciler: hardSet,
};
export default persistReducer(configStorage, rootReducer);
