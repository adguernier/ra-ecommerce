import {
  DateField,
  ReferenceField,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Basket } from "../order";

export const InvoiceShow = () => {
  return (
    <SimpleShowLayout>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginBottom: 2,
            }}
          >
            <Typography variant="h6">Posters Galore</Typography>
            <Typography variant="h6">
              Invoice <TextField source="id" variant="h6" />
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginBottom: 2,
              marginTop: 2,
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography variant="h6">Date</Typography>
              <DateField source="date" />
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6">Order</Typography>
              <ReferenceField source="command_id" reference="commands" />
            </Stack>
          </Stack>

          <ReferenceField source="command_id" reference="commands" link={false}>
            <Basket />
          </ReferenceField>
        </CardContent>
      </Card>
    </SimpleShowLayout>
  );
};
