import { MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { RootState } from "../../app/store/store";
import CartItems from "../../components/CartItems/CartItems";
import CartPage from "../../components/CartPage/CartPage";
import { removeFromCart } from "../../features/cart/cartSlice";

type Props = {
  ordering: MouseEventHandler<HTMLButtonElement>;
};
const Cart = ({ ordering }: Props) => {
  const { items, totalPrice, deliveryPrice } = useAppSelector(
    (state: RootState) => state.cart
  );
	
  const dispatch = useAppDispatch();

  const removeHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartPage
      deliveryPrice={deliveryPrice}
      totalPrice={totalPrice}
      dishes={items}
      handlePlaceOrder={ordering}
    >
      <CartItems cartItems={items} onClick={removeHandler} />
    </CartPage>
  );
};

export default Cart;
