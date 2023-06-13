import { Layout, LayoutProps } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";

export const AppLayout = (props: LayoutProps) => {
  return (
    <>
      <Layout {...props} />
      {import.meta.env.MODE === "development" ? <ReactQueryDevtools /> : null}
    </>
  );
};
