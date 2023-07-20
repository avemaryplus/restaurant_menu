import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosDishes from "../../api/axiosDishes";
import { IFirebaseData } from "../../interfaces/IFirebaseData";
import IDish from "../../interfaces/IDish";

interface DishesState {
  dishes: IDish[];
  loading: boolean;
  error: string | undefined;
}

const initialState: DishesState = {
  dishes: [],
  loading: false,
  error: undefined,
};

export const fetchDishes = createAsyncThunk("fetch/dishes", async () => {
  const { data } = await axiosDishes.get<IFirebaseData<IDish>>("dishes.json");
  const dishes: IDish[] = Object.keys(data).map((key) => ({
    ...data[key],
    id: key,
  }));

  return dishes;
});

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.dishes = action.payload;
        state.loading = false;
      });
  },
});

export const dishesReducer = dishesSlice.reducer;
