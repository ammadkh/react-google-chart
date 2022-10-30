import React, { useContext } from 'react';
import { Chart } from "react-google-charts";
import { DataContext } from '../../Contexts/data.context';
import Box from "@mui/material/Box";


export default function RetiusComponent() {
    const { retiusData } = useContext(DataContext);
    if(!retiusData.length) {
        return <Box className='loading'><p>Loading...</p></Box>
    }
  return (
    <Chart
    chartType="ColumnChart"
    width="100%"
    height="350px"
    data={retiusData}
    options={{
      title: "Retaus-United States-Retail Trade",
      legend: "none",
      hAxis: { textPosition: "none" },
      vAxis: { textPosition: "none" },
      chartArea: { width: "100%", height: "80%" },
    }}
  />
  )
}
