import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppBar } from "./AppBar";

export const AppLayout = (props: LayoutProps) => {
  return (
    <>
      <Layout {...props} appBar={AppBar} />
      <ReactQueryDevtools />
    </>
  );
};
