import IDish from "../../interfaces/IDish";
import AddButtom from "../Buttons/AddButton/AddButtom";
import "./DishesList.css";

type Props = {
  dishes: IDish[];
  onClick: (id: string) => void;
};

const DishesList = ({ dishes, onClick }: Props) => {
  return (
    <ul className="DishesList">
      {dishes.map((dish) => (
        <li key={dish.id} className="dish-card">
          <img src={dish.image} alt={dish.name} />
          <div className="dish-text">
            <h3>{dish.name}</h3>
            <p>{dish.price} тг</p>
          </div>
          <AddButtom onClick={() => onClick(dish.id)} children='Add to cart' price={`price - ${dish.price}тг`}/>
        </li>
      ))}
    </ul>
  );
};

export default DishesList;
