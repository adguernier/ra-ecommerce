import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { AppLayout, InvoiceList } from "./ui";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={AppLayout}
  >
    <Resource
      name="invoices"
      list={InvoiceList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="commands"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
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
    <Resource
      name="customers"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="reviews"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
