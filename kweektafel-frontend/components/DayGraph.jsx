import { XAxis, YAxis, Line,  Legend, Tooltip } from "recharts";

import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
const LineChart = dynamic(
    () => import("recharts").then((mod) => mod.LineChart),
    {ssr: false}
)

const getDaysInMonth = (month,year) => {
    return new Date(year, month+1, 0).getDate();
};   

const getMoney = async () => {
    let pricePerHour = [];
    const currentDate = new Date(Date.now())
    for (let i=0; i < 24; i++) {
        pricePerHour.push(0);
    }
    console.log()
    await fetch("http://kweektafel.nybu-nerd.xyz/items/sales").then((res) => res.json()).then((res) => res.map((sale) => {
        const date = new Date(sale.date)

        if (date.getMonth() == currentDate.getMonth() && date.getDate() == currentDate.getDate()) {
            pricePerHour[date.getHours()-1] += sale.price;
        }
        }
        ))
    return pricePerHour;    
}


function DayGraph() {
    const [data, setData] = useState([])
    useEffect(() => {
        getMoney().then((res) => {
          const _data = [];
          
          res.map((month, i) => {
            _data.push({
              name: i+1,
              Inkomsten: month,
              fill: `#9eedbc`
            })
          })
          setData(_data);
        })
        // console.log(money);
    }, [])

  return (
    <LineChart
    width={1000}
    height={500}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Inkomsten" stroke="#82ca9d" />
  </LineChart>
  );
}

export default DayGraph;
