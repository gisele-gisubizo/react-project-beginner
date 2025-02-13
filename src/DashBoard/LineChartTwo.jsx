import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './DashBoard_styles/LineChartTwo.css'

const data = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
  { name: "Jul", uv: 3490, pv: 4300 },
];

function LineChartTwoComponent() {
  return (
    <div className='graphs' style={{ width: "150%", height: 130 }}>
      <ResponsiveContainer width="110%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <Tooltip />
          <Legend />
          {/* Removed the purple line */}
          <Line type="monotone" dataKey="pv" stroke="rgb(89, 86, 233)" strokeWidth={2} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartTwoComponent;