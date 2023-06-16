import { useRecordContext } from "react-admin";
import { Customer } from "../../types";

export const AddressField = () => {
  const customer = useRecordContext<Customer>();
  return `${customer.address} ${customer.zipcode} ${customer.city}`;
};
