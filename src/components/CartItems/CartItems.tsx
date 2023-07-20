import ICartItem from "../../interfaces/ICartItem";
import DeleteBtn from "../Buttons/DeleteBtn/DeleteBtn";
import "./CartItems.css";

type Props = {
  cartItems: ICartItem[];
  onClick: (id: string) => void;
};

const CartItems = ({ cartItems, onClick }: Props) => {
  return (
    <ul className="CartItems">
      {cartItems.map((item) => (
        <li key={item.id} className="cart-item">
          <div className="cart-item__text">
            <p>
              {item.name} &#215; {item.quantity}{" "}
            </p>
            <p>{item.itemTotalPrice} тг</p>
          </div>

          <DeleteBtn onClick={() => onClick(item.id)} />
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
