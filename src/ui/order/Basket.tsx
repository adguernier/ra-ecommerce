import {
  ArrayField,
  Datagrid,
  FunctionField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  useRecordContext,
} from "react-admin";

export const Basket = () => {
  const order = useRecordContext();

  return (
    <ArrayField source="basket">
      <Datagrid
        bulkActionButtons={false}
        rowClick={(id, resource, record) => `/products/${record.product_id}`}
      >
        <ReferenceField source="product_id" reference="products" link={false}>
          <ImageField source="thumbnail" />
        </ReferenceField>

        <ReferenceField source="product_id" reference="products" link={false}>
          <TextField source="reference" />
        </ReferenceField>

        <ReferenceField source="product_id" reference="products" link={false}>
          <TextField source="price" />
        </ReferenceField>

        <NumberField source="quantity" />

        <ReferenceField source="product_id" reference="products" link={false}>
          <FunctionField
            label="Quantity"
            render={(record) =>
              Number(
                order.basket.find((b) => record.id === b.product_id).quantity *
                  record.price
              ).toFixed(2)
            }
          />
        </ReferenceField>
      </Datagrid>
    </ArrayField>
  );
};
