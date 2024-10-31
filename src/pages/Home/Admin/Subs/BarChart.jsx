import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    {
      name: 'Jan',
      "Getting Started": 13,
      "Scaling Up": 16,
      "Home Program": 30,
      amt: 4400,
    },
    {
      name: 'Feb',
      "Getting Started": 7,
      "Scaling Up": 14,
      "Home Program": 16,
      amt: 2210,
    },
    {
      name: "Mar",
      "Getting Started": 10,
      "Scaling Up": 12,
      "Home Program": 12,
      amt: 2290,
    },
    {
      name: 'Apr',
      "Getting Started": 10,
      "Scaling Up": 12,
      "Home Program": 12,
      amt: 2000,
    },
    {
      name: 'May',
      "Getting Started": 10,
      "Scaling Up": 12,
      "Home Program": 12,
      amt: 2181,
    },
    {
      name: 'June',
      "Getting Started": 10,
      "Scaling Up": 12,
      "Home Program": 12,
      amt: 2500,
    },
    {
      name: 'July',
      "Getting Started": 10,
      "Scaling Up": 12,
      "Home Program": 12,
      amt: 2100,
    },
    {
      name: 'Aug',
      "Getting Started": 10,
      "Scaling Up": 12,
      "Home Program": 12,
      amt: 2100,
    },
 
  ];
  
  const BarChartGraph = () => {
    return (
      <ResponsiveContainer width="100%" aspect={2.5}>
        <BarChart
          width={200}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Getting Started" fill="#A4BFAB" />
          <Bar dataKey="Scaling Up" fill="#22C55E" />
          <Bar dataKey="Home Program" fill="#18243E" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default BarChartGraph;
  