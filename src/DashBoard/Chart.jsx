import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 1000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2500 },
  { name: 'Apr', uv: 5000 },
  { name: 'May', uv: 4000 },
  { name: 'Jun', uv: 6000 },
  { name: 'Jul', uv: 3500 },
];

function Chart() {
  return (
    <div className="graph" style={{ width: '100%', height: '50px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area 
            type="monotone"  // Ensures smooth curves
            dataKey="uv" 
            stroke="none"  
            fillOpacity={1} 
            fill="url(#colorUv)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;