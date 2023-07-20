import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import IOrder from "../../interfaces/IOrder";

import axiosDishes from "../../api/axiosDishes";
import { AxiosRequestConfig, AxiosResponse } from "axios";

type State = {
  orders: IOrder[];
  isLoading: boolean;
  error: SerializedError | null;
  isOrderCompleted: boolean;
};

const initialState: State = {
  orders: [],
  isLoading: false,
  error: null,
  isOrderCompleted: false,
};

export const createOrder = createAsyncThunk(
  "post/orders",
  async (payload: IOrder) => {
    await axiosDishes.post<AxiosRequestConfig, AxiosResponse, IOrder>(
      "orders.json",
      payload
    );
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
				state.isOrderCompleted = false;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.isLoading = false;
				state.isOrderCompleted = true;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const ordersReducer = orderSlice.reducer;
