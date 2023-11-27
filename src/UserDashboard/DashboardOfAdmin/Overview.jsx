import { useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis } from "recharts";
import Chart from "react-apexcharts";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };



const Overview = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const dataOfPie = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
            
      var options = {
        chart: {
        height: 380,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'month',
        categories: ["jan", "Feb", "Mar", "April", "May", "Jun", "july", "Aug", "sep", "Oct", "Nov", "Dec" ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };
      const series = [{
        name: 'Product selled',
        data: [31, 40, 28, 51, 42, 109, 100, 110, 90, 140, 150, 155]
      }, {
        name: 'Product canceled',
        data: [11, 32, 45, 32, 34, 52, 70, 150, 50, 100, 57, 70]
      }]

      var optionsForPie = {
        chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'bottom',
        offsetY: 0,
        height: 18,
      }
      };
      const seriseForDonut = [44, 55, 13, 22];
    return (
        <div className="w-full h-full px-3 md:px-8">
           <div className="grid grid-cols-2 md:grid-cols-3 h-[150px] gap-6 mb-7">
           <div className="w-full p-10 rounded-xl bg-white">
            <h2 className="text-blue-400 font-bold text-xl">Total Products</h2>
            <h2 className="text-gray-800 font-bold text-lg">Hasnat Hasan</h2>
           </div>
           <div className="w-full p-10 rounded-xl bg-white">
            <h2 className="text-blue-400 font-bold text-xl">Total Orders</h2>
            <h2 className="text-gray-800 font-bold text-lg">Hasnat Hasan</h2>
           </div>
           <div className="w-full p-10 rounded-xl bg-white">
            <h2 className="text-blue-400 font-bold text-xl">Total Users</h2>
            <h2 className="text-gray-800 font-bold text-lg">Hasnat Hasan</h2>
           </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-3 md:col-span-2 rounded-md shadow-md">
           <Chart
              options={options}
              series={series}
              type="area"
              width="100%"
            />
           </div>
           <div className="bg-white flex justify-center items-center rounded-md shadow-md">
           <Chart
              options={optionsForPie}
              series={seriseForDonut}
              type="donut"
              width="110%"
            />
           </div>

           </div>

        </div>
    );
};

export default Overview;