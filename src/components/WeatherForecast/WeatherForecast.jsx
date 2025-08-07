import "./WeatherForecast.css";
import WeatherData from "../WeatherData/WeatherData.jsx";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
	return (
		<div className="weather">
			<WeatherData day={day} />
			<WeatherIcon img={img} imgAlt={imgAlt} />
			<WeatherData conditions={conditions} time={time} />
		</div>
	);
};

export default WeatherForecast;
