import React from 'react'
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { convert } from "../services/economic-dashboard.service"

interface DateProps {
    dateValue: Date;
    label: string;
    setDateValue: (e: any) => void
}


export default function DateInputComponent(props: DateProps) {
  return (
    <DatePicker
    label={props.label}
    value={props.dateValue}
    views={['year', 'month']}
    onChange={(newValue: any) => {
      props.setDateValue(convert(new Date(newValue)));
    }}
    renderInput={(params) => <TextField {...params} />}
  />
  )
}

