import { createStoreHook } from "react-redux";
import rootReducer from "./rootReducer";

export function configureStore() {
  return createStoreHook(rootReducer);
}
