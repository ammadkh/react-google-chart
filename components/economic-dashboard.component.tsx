import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Grid from "@mui/material/Grid";
import CpiusComponent from "./charts/cpius.component";
import ConfusComponent from "./charts/confus.component";
import RetiusComponent from "./charts/retius.component";
import CentusPopusComponent from "./charts/sentus-popus.component";
import HeaderComponent from "./header.component";

export default function EconomicDashboardComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={10} justifyContent="center" alignItems="center">
        <HeaderComponent />
        <Grid item xs={6}>
          <CpiusComponent />
        </Grid>
        <Grid item xs={6}>
          <ConfusComponent />
        </Grid>
        <Grid item xs={6}>
          <RetiusComponent />
        </Grid>
        <Grid item xs={6}>
          <CentusPopusComponent />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
