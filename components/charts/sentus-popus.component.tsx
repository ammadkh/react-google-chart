import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/data.context';
import Box from "@mui/material/Box";


export default function CentusPopusComponent() {
    const { sentusData, popusData } = useContext(DataContext);
    if(!sentusData || !popusData) {
        return <Box className='loading'><p>Loading...</p></Box>
    }
  return (
    <Box style={{ border: "1px solid black", padding: "50px 15px" }}>
    <h3>Average US Sentiment Index (SENTUS)</h3>
    <b style={{ color: sentusData > 0 ? "green" : "red" }}>
      {sentusData.toFixed(2)}
    </b>
    <h3>Population Growth during the selected Period (POPUS)</h3>
    <p>{popusData.toFixed(2)}</p>
  </Box>
  )
}
