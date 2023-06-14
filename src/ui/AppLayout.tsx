import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppLocationContext } from "@react-admin/ra-navigation";
import { AppBar } from "./AppBar";
import { AppMenu } from "./AppMenu";

export const AppLayout = (props: LayoutProps) => {
  return (
    <AppLocationContext>
      <Layout {...props} appBar={AppBar} menu={AppMenu} />
      <ReactQueryDevtools />
    </AppLocationContext>
  );
};
