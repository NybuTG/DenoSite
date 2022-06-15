import { XAxis, YAxis, Bar,  Legend, Tooltip } from "recharts";

import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
const BarChart = dynamic(
    () => import("recharts").then((mod) => mod.BarChart),
    {ssr: false}
)

const getDaysInMonth = (month,year) => {
    return new Date(year, month+1, 0).getDate();
};   

const getMoney = async () => {
    let pricePerDay = [];
    const currentDate = new Date(Date.now())
    const days = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    for (let i=0; i < days; i++) {
        pricePerDay.push(0);
    }
    console.log()
    await fetch("http://localhost:8080/items/sales").then((res) => res.json()).then((res) => res.map((sale) => {
        const date = new Date(sale.date)

        if (date.getMonth() == currentDate.getMonth()) {
            // console.log(date.getDate())
            pricePerDay[date.getDate()-1] += sale.price;
        }
        }
        ))
    return pricePerDay;    
}


function MonthGraph() {
    const [data, setData] = useState([])
    useEffect(() => {
        getMoney().then((res) => {
          const _data = [];

          res.map((month, i) => {
            let _color = 100 + i*4
            _color = _color.toString(16)
            _data.push({
              name: i+1,
              Inkomsten: month,
              fill: `#63${_color+20}${_color}`
            })
          })
          setData(_data);
        })
        // console.log(money);
    }, [])

  return (
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
      }}
      >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar style={{borderRadius: "0.5vw"}} dataKey="Inkomsten" fill="#82ca9d" barSize={50}/>
    </BarChart>
  );
}

export default MonthGraph;