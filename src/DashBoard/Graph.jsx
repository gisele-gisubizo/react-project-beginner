import React from "react";
import './DashBoard_styles/data.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", uv: 400, pv: 2400 },
  { name: "Feb", uv: 300, pv: 2210 },
  { name: "Mar", uv: 200, pv: 2290 },
  { name: "Apr", uv: 278, pv: 2000 },
  { name: "May", uv: 189, pv: 2181 },
  { name: "Jun", uv: 239, pv: 2500 },
];

const Graph = () => {
  return (
    <div className="graph" style={{ width: "80%", height: "90px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;