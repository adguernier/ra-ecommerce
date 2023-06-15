import {
  Datagrid,
  ImageField,
  RecordContextProvider,
  ReferenceArrayField,
  TextField,
  useRecordContext,
} from "react-admin";

export const Basket = () => {
  const order = useRecordContext();
  if (!order) return null;

  const productIds = order.basket.map((b) => b.product_id);

  return (
    <RecordContextProvider value={{ product_ids: productIds }}>
      <ReferenceArrayField
        label="Products"
        reference="products"
        source="product_ids"
      >
        <Datagrid
          isRowSelectable={() => false}
          rowClick={(id, resource, record) => `/products/${record.id}`}
        >
          <ImageField source="thumbnail" />
          <TextField source="reference" />
          <TextField source="price" />
        </Datagrid>
      </ReferenceArrayField>
    </RecordContextProvider>
  );
};
