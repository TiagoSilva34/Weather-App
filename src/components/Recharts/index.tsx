import { LineChart, Line, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 120 },
  { name: 'Mar', value: 110 },
];

const Recharts = () => (
  <LineChart width={500} height={300} data={data}>
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
    <Tooltip />
  </LineChart>
);

export default Recharts;