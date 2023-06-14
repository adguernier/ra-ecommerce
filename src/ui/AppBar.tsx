import { TitlePortal, AppBar as RaAppBar } from "react-admin";
import { Box } from "@mui/material";
import Logo from "./Logo";
export const AppBar = () => {
  return (
    <RaAppBar color="transparent">
      <TitlePortal />
      <Logo />
      <Box flex="1" />
    </RaAppBar>
  );
};
