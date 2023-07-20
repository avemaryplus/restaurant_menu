import { ICustomer } from "./ICustomer";
import IOrderItem from "./IOrderItem";

interface IOrder {
  customer: ICustomer;
  items: IOrderItem[];
}

export default IOrder;
