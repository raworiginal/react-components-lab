import "./WeatherForecast.css";
import WeatherData from "../WeatherData/WeatherData.jsx";

const WeatherForecast = ({ forecast }) => {
	return (
		<div className="weather">
			<WeatherData {...forecast} />
		</div>
	);
};

export default WeatherForecast;
