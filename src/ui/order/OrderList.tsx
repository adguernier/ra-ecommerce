import {
  ArrayField,
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const OrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField source="customer_id" reference="customers" />
      <ArrayField source="basket">
        <SingleFieldList>
          <ChipField source="product_id" />
        </SingleFieldList>
      </ArrayField>
      <NumberField source="total_ex_taxes" />
      <NumberField source="delivery_fees" />
      <NumberField source="tax_rate" />
      <NumberField source="taxes" />
      <NumberField source="total" />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
