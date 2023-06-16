import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  ListGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { AppLayout, customer, invoice, order } from "./ui";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={AppLayout}
  >
    <Resource name="invoices" {...invoice} />
    <Resource name="commands" {...order} />
    <Resource
      name="products"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="categories"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource name="customers" {...customer} />
    <Resource
      name="reviews"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
