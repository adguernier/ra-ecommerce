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
  </Admin>
);
