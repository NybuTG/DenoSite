import { RadialBar, XAxis, YAxis, Bar,  Legend, Tooltip } from "recharts";

import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
const BarChart = dynamic(
    () => import("recharts").then((mod) => mod.BarChart),
    {ssr: false}
)

const months = ["Jan", "Feb", "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

const getMoney = async () => {
    const pricePerMonth = [0, 0, 0, 0, 
                           0, 0, 0, 0, 
                           0, 0, 0, 0];
    await fetch("http://localhost:8080/items/sales").then((res) => res.json()).then((res) => res.map((sale) => {
        const month = new Date(sale.date).getMonth();
        // console.log("Months", month)
        pricePerMonth[month] += sale.price
    }))
    return pricePerMonth;    
}

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

function YearGraph() {
    const [data, setData] = useState([])
    useEffect(() => {
        getMoney().then((res) => {
          const _data = [];
          
          res.map((month, i) => {
            let _color = 100 + i*13
            _color = _color.toString(16)
            console.log(`63${_color}${_color}`)
            _data.push({
              name: months[i],
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

export default YearGraph;