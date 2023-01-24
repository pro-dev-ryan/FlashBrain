import React from "react";
import { useLoaderData } from "react-router-dom";
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
  const data = useLoaderData();
  const datas = data.data;

  return (
    <div className="flex flex-col justify-center items-center space-y-5 mb-20 ">
      <h2 className="text-center text-xl lg:text-2xl lg:my-5 text-white font-heading font-bold glass w-fit bg-zinc-700 bg-opacity-30 p-2">
        This is Statistics
      </h2>
      <div className="glassComponent w-[100%] mt-10 lg:w-[80%] h-[60vh] rounded-lg">
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={datas}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="natural"
              dataKey="total"
              stroke="#faffb5"
              fill="#11D9E5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
