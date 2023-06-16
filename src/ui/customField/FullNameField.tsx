import { useRecordContext } from "react-admin";
import Typography from "@mui/material/Typography";
import { Customer } from "../../types";

export const FullNameField = () => {
  const customer = useRecordContext<Customer>();
  return (
    <Typography>
      {customer.first_name} {customer.last_name}
    </Typography>
  );
};
