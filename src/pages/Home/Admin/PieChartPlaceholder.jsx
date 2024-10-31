
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#153622', '#22C55E', '#1E5034'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );}

const PieChartPlaceholder = ({data}) => {
  const allValuesAreZero = data?.every(item => item.value === 0);
  if(allValuesAreZero){
    return <div className=' h-36 flex items-center justify-center'><p className=' text-black'>No Data Available</p></div>
  }
  return (
    <ResponsiveContainer  width="100%" height="50%">
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  );
};

export default PieChartPlaceholder;
