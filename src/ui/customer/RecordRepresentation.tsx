import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Customer } from "../../types";

export const RecordRepresentation = (record: Customer) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar
        alt={`${record.first_name} ${record.last_name}`}
        src={record.avatar}
      />
      <Typography>{`${record.first_name} ${record.last_name}`}</Typography>
    </Stack>
  );
};
