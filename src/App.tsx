import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { AppLayout } from "./ui";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={AppLayout}
  >
    <Resource
      name="invoices"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
