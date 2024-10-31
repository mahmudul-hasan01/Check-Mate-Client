import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#1D3322", "#3A6645", "#6D9978"];

const PieChartGraph = ({ todo, progress, completed }) => {
  if (todo === 0 && progress === 0 && completed === 0)
    return (
      <div className="my-8 pb-8 text-center ">
        No data available <br /> You Dont complete any Task
      </div>
    );
  const data = [
    { name: "In Progress", value: progress },
    { name: "To Do", value: todo },
    { name: "Completed", value: completed },
  ];
  return (
    <div className="w-full h-72">
      {" "}
      {/* Set a fixed height to maintain proportions */}
      <ResponsiveContainer width="100%" height="100%">
        {" "}
        {/* Makes chart responsive */}
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartGraph;
