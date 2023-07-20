import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { fetchDishes } from "../../features/dishes/dishesSlice";
import DishesList from "../../components/DishesList/DishesList";
import Loader from "../../components/Loader/Loader";
import { addToCart } from "../../features/cart/cartSlice";
import ICartItem from "../../interfaces/ICartItem";
import { RootState } from "../../app/store/store";

const Dishes = () => {
  const { loading, error, dishes } = useAppSelector(
    (state: RootState) => state.dishes
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  const addToCard = (id: string) => {
    const dishToAdd = dishes.find((dish) => dish.id === id);
    if (dishToAdd) {
      const cartItem: ICartItem = { ...dishToAdd, quantity: 1 };
      dispatch(addToCart(cartItem));
    }
  };

  return (
    <>
      {error ? (
        <div className="error"> Error: {error}</div>
      ) : (
        <DishesList dishes={dishes} onClick={addToCard} />
      )}
      {loading && <Loader />}
    </>
  );
};

export default Dishes;
