import { MouseEventHandler, ReactNode } from "react";
import ICartItem from "../../interfaces/ICartItem";
import "./CartPage.css";

type Props = {
  children: ReactNode;
  deliveryPrice: number;
  totalPrice: number;
  handlePlaceOrder: MouseEventHandler<HTMLButtonElement>;
  dishes: ICartItem[];
};

const CartPage = ({
  children,
  deliveryPrice,
  totalPrice,
  handlePlaceOrder,
  dishes,
}: Props) => {
  return (
    <div className="CartPage">
      <h2>Корзина:</h2>
      {children}
      <p>Доставка: {deliveryPrice} тг</p>
      <p>Итого: {totalPrice} тг</p>
      <button
        className="order-btn"
        onClick={handlePlaceOrder}
        disabled={dishes.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartPage;
