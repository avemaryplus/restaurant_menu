import IDish from "./IDish";

interface ICartItem extends IDish {
  quantity: number;
	itemTotalPrice?: number;
}

export default ICartItem;
