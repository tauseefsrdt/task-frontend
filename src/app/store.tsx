import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/auth/authSlice";
import uiSLiceReducer from "../features/ui/uiSlice";
import taskSliceReducer from "../features/tasks/taskSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    ui: uiSLiceReducer,
    task: taskSliceReducer,
  },
});
//  types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
