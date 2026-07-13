import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function UserChart({data}) {

  return (
    <ResponsiveContainer width="100%" height={300}>

      <BarChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="role" />

        <YAxis />

        <Tooltip />

        <Bar 
          dataKey="total" 
          fill="#8884d8"
        />

      </BarChart>

    </ResponsiveContainer>
  )
}

export default UserChart;