import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <h2 className="text-center text-xl lg:text-2xl lg:my-5 text-white font-heading font-bold glass w-fit bg-zinc-700 bg-opacity-30 p-2">
        This is Statistics
      </h2>
      {/* <div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default Statistics;
