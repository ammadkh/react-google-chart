import React, { useContext } from 'react';
import { Chart } from "react-google-charts";
import { DataContext } from '../../Contexts/data.context';
import Box from "@mui/material/Box";


export default function CpiusComponent() {
    const { cpiusData } = useContext(DataContext);
    if(!cpiusData.length) {
        return <Box className='loading'><p>Loading...</p></Box>
    }
  return (
    <Chart
    chartType="LineChart"
    width="100%"
    height="350px"
    data={cpiusData}
    options={{
      title: "CPIUS-United States-Consumer Price Index",
      legend: "none",
      hAxis: { textPosition: "none" },
      vAxis: { textPosition: "none" },
      chartArea: { width: "100%", height: "80%" },
    }}
  />
  )
}
