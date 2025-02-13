import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './DashBoard_styles/barChart.css'

const data = [
  { name: "Jan", pv: 4000, uv: 2400 },
  { name: "Feb", pv: 3000, uv: 1398 },
  { name: "Mar", pv: 2000, uv: 9800 },
  { name: "Apr", pv: 2780, uv: 3908 },
  { name: "May", pv: 1890, uv: 4800 },
  { name: "Jun", pv: 2390, uv: 3800 },
  { name: "Jul", pv: 3490, uv: 4300 },
];

function CustomBarChart() {
  return (
    <div style={{ width: "100%", height: 250 }} className="Bar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid stroke="none" />  {/* Removed grid lines */}
          <XAxis dataKey="name" tickLine={false} axisLine={false} /> {/* Removed axis and tick lines */}
          <YAxis tickLine={false} axisLine={false} /> {/* Removed axis and tick lines */}
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="rgb(89, 86, 233)" />
          <Bar dataKey="uv" fill="rgb(164, 215, 240)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;