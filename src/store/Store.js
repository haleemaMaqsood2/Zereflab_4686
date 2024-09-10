import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import onBoardingSlice from "./slices/onBoardingSlice/onBoardingSlice";
import eventDataSlice from "./slices/eventDataSlice/eventDataSlice";
import userSlice from "./slices/userSlice";
const rootReducer = combineReducers({
    onBoardingSlice: onBoardingSlice,
    event:eventDataSlice,
    user:userSlice,
    
  
  });
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);