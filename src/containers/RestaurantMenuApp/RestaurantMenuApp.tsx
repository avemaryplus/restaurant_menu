import Dishes from "../Dishes/Dishes";
import Cart from "../Cart/Cart";
import ContactData from "../ContactData/ContactData";
import Modal from "../../components/UI/Modal/Modal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { clearCart } from "../../features/cart/cartSlice";
import "./RestaurantMenuApp.css";
import { RootState } from "../../app/store/store";

const RestaurantMenuApp = () => {
  const [ordering, setOrdering] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isOrderCompleted } = useAppSelector(
    (state: RootState) => state.orders
  );

  useEffect(() => {
    if (isOrderCompleted) {
			showSuccessModal();
      dispatch(clearCart());
    }
  }, [isOrderCompleted, dispatch]);

  const placeOrder = () => {
    setOrdering(true);
  };

  const closeOrdering = () => {
    setOrdering(false);
  };
  const closeSuccessModal = () => {
    setSuccessModal(false);
  };

  const showSuccessModal = () => {
    setSuccessModal(true);
  };

  return (
    <>
      <h1>Меню нашего Ресторана</h1>

      <Modal show={isOrderCompleted && successModal} close={closeSuccessModal}>
        <p className="success-text">Success!</p>
      </Modal>

      <Modal show={ordering} close={closeOrdering}>
        <ContactData closeOrdering={closeOrdering} />
      </Modal>

      <div className="container menu-wrapper">
        <Dishes />
        <Cart ordering={placeOrder} />
      </div>
    </>
  );
};

export default RestaurantMenuApp;
