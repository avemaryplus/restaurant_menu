import { ChangeEvent, useState } from "react";
import { ICustomer } from "../../interfaces/ICustomer";
import OrderForm from "../../components/OrderForm/OrderForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { RootState } from "../../app/store/store";
import IOrder from "../../interfaces/IOrder";
import { createOrder } from "../../features/orders/orderSlice";
import Loader from "../../components/Loader/Loader";


type Props = {
  closeOrdering: () => void;
};

const ContactData = ({ closeOrdering }: Props) => {
  const { isLoading, error } = useAppSelector(
    (state: RootState) => state.orders
  );
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();
  const [customer, setCustomer] = useState<ICustomer>({
    name: "",
    address: "",
    phone: "",
  });

  const { totalPrice } = useAppSelector((state: RootState) => state.cart);

  const customerDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitOrderHandler = async () => {
    const filterItems = cartItems.map(({ name, quantity }) => ({
      name,
      quantity,
    }));
    const order: IOrder = {
      customer: { ...customer },
      items: filterItems,
    };
    await dispatch(createOrder(order));
    if (!error) {
      closeOrdering();
    }
  };

  return (
    <div className="ContactData">
      {isLoading && <Loader />}
      {error ? (
        <div className="error"> Error: {error.message}</div>
      ) : (
        <>
          <p>Сумма вашего заказа: {totalPrice} тг</p>
          <p>Заполните форму для заказа:</p>
          <OrderForm
            customer={customer}
            change={customerDataChange}
            submit={() => void submitOrderHandler()}
            close={closeOrdering}
          />
        </>
      )}
    </div>
  );
};

export default ContactData;
