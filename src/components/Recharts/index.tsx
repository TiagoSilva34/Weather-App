import {
  Tooltip,
  XAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
  LabelList,
  Legend,
} from "recharts";
import useWeather from "../../hooks/useWeather";
import { validateDaysDate } from "../../utils/validations";

const Recharts = () => {
  const { forecastData } = useWeather();

  const handleForecastDataDate = () => {
    const data = forecastData?.forecast.forecastday.filter((item) => {
      if (new Date(item.date) > new Date) return item;
    });

    return data;
  };

  const handleRechartsData = () => {
    if (handleForecastDataDate()) {
      const data = handleForecastDataDate()?.map((item) => {
        return {
          date: validateDaysDate(item.date),
          temparatura_maxima: Math.floor(item.day.maxtemp_c),
          temperatura_minima: Math.floor(item.day.mintemp_c),
          raios_uv: item.day.uv,
          precipitacao_mm: item.day.totalprecip_mm,
        };
      });

      return data;
    }
  };

  const handleLabelPrecipRain = (props: any) => {
    const { x, y, width, value, height } = props;
    // const radius = 30;

    return (
      <g>
        {/* <circle
          cx={x + width / 2}
          cy={y + height / 8}
          r={radius}
          fill="#8884d8"
        /> */}
        <text
          x={x + width / 2}
          y={y + height / 8}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}mm
        </text>
      </g>
    );
  };

  const handleLabelUv = (props: any) => {
    const { x, y, width, value, height } = props;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y + height / 8}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}% uv
        </text>
      </g>
    );
  };

  return (
    <div className="recharts_container">
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ padding: "0 2rem"}}
      >
        <BarChart data={handleRechartsData()}>
          <Legend />
          <Bar type="monotone" dataKey="raios_uv" fill="rgba(255, 255, 255, 0.6)">
            <LabelList key="raios_uv" content={handleLabelUv} position="top" />
          </Bar>
          <XAxis dataKey="date" stroke="#FFF" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ padding: "0 2rem"}}
      >
        <BarChart data={handleRechartsData()}>
          <Legend />
          <Bar type="monotone" dataKey="precipitacao_mm" fill="#6c6bcd">
            <LabelList
              key="precipitacao_mm"
              content={handleLabelPrecipRain}
              position="top"
            />
          </Bar>
          <XAxis dataKey="date" stroke="#FFF" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
