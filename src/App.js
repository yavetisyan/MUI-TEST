import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />s
    </Grid>
  );
}

export default App;
