


export const fetchCpiusData = async(startDate: string, endDate: string) => {
    const response = await fetch(
        `https://www.econdb.com/api/series/CPIUS/?from=${startDate}&to=${endDate}&format=json`
      );
    const { data } = await response.json();
    return data;
}


export const fetchConfusData = async(startDate: string, endDate: string) => {
    const response = await fetch(
        `https://www.econdb.com/api/series/CONFUS/?from=${startDate}&to=${endDate}&format=json`
      );
    const { data } = await response.json();
    return data;
}

export const fetchRetausData = async(startDate: string, endDate: string) => {
    const response = await fetch(
        `https://www.econdb.com/api/series/RETAUS/?from=${startDate}&to=${endDate}&format=json`
      );
    const { data } = await response.json();
    return data;
}

export const fetchSentusData = async(startDate: string, endDate: string) => {
    const response = await fetch(
        `https://www.econdb.com/api/series/SENTUS/?from=${startDate}&to=${endDate}&format=json`
      );
    const { data } = await response.json();
    return data;
}

export const fetchPopusData = async(startDate: string, endDate: string) => {
    const response = await fetch(
        `https://www.econdb.com/api/series/POPUS/?from=${startDate}&to=${endDate}&format=json`
      );
    const { data } = await response.json();
    return data;
}

export const manipulateData = (data : any) => {
    if (!data) return;
    const { dates, values } = data;
    const newData = [["Date", "Value"]];
    dates.forEach((date: any, index: number) => {
      const newArr = [date, values[index]];
      newData.push(newArr);
    });
    return newData;
}

export const calculateAverage = (data: any) => {
    if (!data) return;
    const { values } = data;
    const sumValues = values.reduce((total: any, value: number) => total + value, 0);
    return sumValues / values.length;
}


export const convert = (selected: any) => {
    const day = selected.getDate();
    const month =
      selected.getMonth() >= 10
        ? selected.getMonth() + 1
        : `0${selected.getMonth() + 1}`;
    const year = selected.getFullYear();

    return `${year}-${month}-01`;
  };

  export const manipulateScaledData = (data : any, scale: number) => {
    if (!data) return;
    const newData: any[] = [];
    data.forEach((value: any, index: number) => {
        if(index === 0) {
            newData.push(["Date", "Value", "Scaled"])
        } else {
            const newArr = [value[0], value[1], value[1]*scale];
            newData.push(newArr);
        }
    });
    return newData;
}