import { ChangeEventHandler, MouseEventHandler } from "react";
import { ICustomer } from "../../interfaces/ICustomer";
import "./OrderForm.css";

type Props = {
  submit: () => void;
  change: ChangeEventHandler<HTMLInputElement>;
  customer: ICustomer;
  close: MouseEventHandler<HTMLButtonElement>;
};

const OrderForm = ({ submit, customer, change, close }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  return (
    <form onSubmit={handleSubmit} className="OrderForm">
      <input
        className="Input"
        type="text"
        name="name"
        placeholder="Your Name"
        value={customer.name}
        onChange={change}
				required
      />

      <input
        className="Input"
        type="text"
        name="address"
        placeholder="Your Adress"
        value={customer.address}
        onChange={change}
				required
      />

      <input
        className="Input"
        type="text"
        name="phone"
        placeholder="Enter your phone number"
        value={customer.phone}
        onChange={change}
				required
      />
      <div className="controls">
        <button className="submit-btn"  type="submit">Order</button>
        <button className="close-btn" onClick={close} type="button">Close</button>
      </div>
    </form>
  );
};

export default OrderForm;
