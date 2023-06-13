import { TitlePortal, AppBar as RaAppBar } from "react-admin";
import { Box } from "@mui/material";
export const AppBar = () => {
  return (
    <RaAppBar color="transparent">
      <TitlePortal />
      <h4>RA E-commerce</h4>
      <Box flex="1" />
    </RaAppBar>
  );
};
