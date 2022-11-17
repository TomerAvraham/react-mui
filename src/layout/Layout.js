import React from "react";
import { Box, AppBar, Typography, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <AppBar sx={{ padding: 1 }}>
        <Typography variant="h4">Navbar</Typography>
      </AppBar>
      <Container sx={{ marginTop: "70px" }}>{children}</Container>
    </Box>
  );
};

export default Layout;
