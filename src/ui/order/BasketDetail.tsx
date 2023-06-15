import {
  ArrayField,
  FunctionField,
  ImageField,
  NumberField,
  RecordContextProvider,
  ReferenceField,
  TextField,
  useListContext,
  useRecordContext,
} from "react-admin";
import { BasketItem, Order, Product } from "../../types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const BasketDetail = () => {
  return (
    <ArrayField source="basket">
      <ProductGrid />
    </ArrayField>
  );
};

const ProductGrid = () => {
  const order = useRecordContext<Order>();
  const { data: basket } = useListContext();

  if (!order) return null;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Reference</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((basketItem: BasketItem) => (
            <RecordContextProvider
              value={basketItem}
              key={basketItem.product_id}
            >
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <ReferenceField
                    source="product_id"
                    reference="products"
                    link={false}
                  >
                    <ImageField source="thumbnail" />
                  </ReferenceField>
                </TableCell>
                <TableCell align="right">
                  <ReferenceField
                    source="product_id"
                    reference="products"
                    link={false}
                  >
                    <TextField source="reference" />
                  </ReferenceField>
                </TableCell>
                <TableCell align="right">
                  <ReferenceField
                    source="product_id"
                    reference="products"
                    link={false}
                  >
                    <TextField source="price" />
                  </ReferenceField>
                </TableCell>
                <TableCell align="right">
                  <NumberField source="quantity" />
                </TableCell>
                <TableCell align="right">
                  <ReferenceField
                    source="product_id"
                    reference="products"
                    link={false}
                  >
                    <FunctionField
                      label="Quantity"
                      render={(record: Product) =>
                        Number(
                          order.basket.find(
                            (basketItem: BasketItem) =>
                              record.id === basketItem.product_id
                          ).quantity * record.price
                        ).toFixed(2)
                      }
                    />
                  </ReferenceField>
                </TableCell>
              </TableRow>
            </RecordContextProvider>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
