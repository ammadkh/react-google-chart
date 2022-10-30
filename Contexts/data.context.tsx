import { createContext, useEffect, useState } from "react";
import { fetchConfusData, fetchCpiusData, manipulateData, fetchRetausData, fetchSentusData, fetchPopusData, calculateAverage, convert, manipulateScaledData } from "../services/economic-dashboard.service";



export const DataContext = createContext<any>({});


export const DataContextProvider = ({children}: any) => {

  const [fromDate, setFromDate] = useState(convert(new Date("2015-01-01")));
  const [toDate, setToDate] = useState(convert(new Date("2021-01-01")));
  const [slider, setSlider] = useState(1);


  const [cpiusData, setCpiusData] = useState<any>([]);
  const [confusData, setConfusData] = useState<any>([]);
  const [retiusData, setRetiusData] = useState<any>([]);
  const [sentusData, setSentusData] = useState<any>(0);
  const [popusData, setPopusData] = useState<any>(0);


  useEffect(() => {
    const scaledCpiusData = manipulateScaledData(cpiusData, slider);
    const scaledConfusData = manipulateScaledData(confusData, slider);
    setCpiusData(scaledCpiusData);
    setConfusData(scaledConfusData);
  }, [slider])



    useEffect(() => {
       fetchCpiusData(fromDate, toDate).then(manipulateData).then((cpiusData) => 
       setCpiusData(cpiusData));

       fetchConfusData(fromDate, toDate).then(manipulateData).then((confusData) => 
       setConfusData(confusData));

       fetchRetausData(fromDate, toDate).then(manipulateData).then((retausData) => 
       setRetiusData(retausData));

       fetchSentusData(fromDate, toDate).then(calculateAverage).then((average) => 
       setSentusData(average));

       fetchPopusData(fromDate, toDate).then(calculateAverage).then((average) => 
       setPopusData(average));
       setSlider(1)
    }, [fromDate, toDate])

return <DataContext.Provider value={{cpiusData, confusData, retiusData,sentusData, popusData, fromDate, toDate, setFromDate, setToDate, setSlider, slider }}>
    {children}
</DataContext.Provider>
}