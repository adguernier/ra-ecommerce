import { Loading, useGetMany, useRecordContext } from "react-admin";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

export const Basket = () => {
  const order = useRecordContext();
  if (!order) return null;

  const productIds = order.basket.map((b) => b.product_id);
  const { data: products, isLoading } = useGetMany("products", {
    ids: productIds,
  });

  if (isLoading) return <Loading />;

  if (!products) return null;

  const representation = products.map((product) =>
    Object.assign(
      product,
      order.basket.find((b) => b.product_id === product.id)
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Reference</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {representation.map((product) => (
            <TableRow
              key={product.product_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img width="50px" src={product.thumbnail} alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Link href={`/products/${product.id}`}>
                  {product.reference}
                </Link>
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">
                {product.quantity * product.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
