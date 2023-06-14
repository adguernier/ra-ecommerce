import {
  Datagrid,
  DateField,
  DateInput,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { InvoiceShow } from "./InvoiceShow";

const filters = [
  <DateInput source="date_gte" label="Passed Since" alwaysOn />,
  <DateInput source="date_lte" label="Passed Before" alwaysOn />,
];

export const InvoiceList = () => (
  <List filters={filters}>
    <Datagrid rowClick="expand" expand={<InvoiceShow />}>
      <TextField source="id" />
      <DateField source="date" />
      <ReferenceField source="command_id" reference="commands" />
      <ReferenceField source="customer_id" reference="customers" />
      <NumberField source="total_ex_taxes" />
      <NumberField source="delivery_fees" />
      <NumberField source="tax_rate" />
      <NumberField source="taxes" />
      <NumberField source="total" />
    </Datagrid>
  </List>
);
