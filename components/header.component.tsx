import React, { useContext } from 'react';
import Slider from "@mui/material/Slider";
import { DataContext } from '../Contexts/data.context';
import Grid from "@mui/material/Grid";
import DateInputComponent from "../utility/date-input.component";


export default function HeaderComponent() {
    const { fromDate, toDate, setFromDate, setToDate, setSlider, slider } = useContext(DataContext);

  const onChangeHandler = (event: Event, value: number | number[]) => {
    setSlider(value);
  };

  return (
    <>
    <Grid item xs={3}>
    <h3>Economic Dashboard</h3>
  </Grid>
  <Grid item xs={3}>
    <DateInputComponent
      label="From"
      dateValue={fromDate}
      setDateValue={setFromDate}
    />
  </Grid>
  <Grid item xs={3}>
    <DateInputComponent
      label="To"
      dateValue={toDate}
      setDateValue={setToDate}
    />
  </Grid>
  <Grid item xs={2}>
    <Slider
      aria-label="Small"
      value={slider}
      step={0.1}
      marks
      onChange={onChangeHandler}
      min={1}
      max={2}
      size="small"
      valueLabelDisplay="auto"
    />
  </Grid>
    </>
  )
}
