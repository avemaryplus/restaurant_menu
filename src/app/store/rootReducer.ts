import { combineReducers } from "@reduxjs/toolkit";
import { dishesReducer } from "../../features/dishes/dishesSlice";
import { cartReducer } from "../../features/cart/cartSlice";
import { ordersReducer } from "../../features/orders/orderSlice";

const rootReducer = combineReducers({
  dishes: dishesReducer,
  cart: cartReducer,
	orders: ordersReducer
});

export default rootReducer;
