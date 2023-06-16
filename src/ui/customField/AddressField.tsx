import { useRecordContext } from "react-admin";
import Typography from "@mui/material/Typography";
import { Customer } from "../../types";

export const AddressField = () => {
  const customer = useRecordContext<Customer>();
  return (
    <Typography>
      {customer.address} {customer.zipcode} {customer.city}
    </Typography>
  );
};
