import React, { useState } from "react";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "e1ce3b4655ba4ebfb1342d6b99863362";

  const fetchWeatherData = async () => {
    try {
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=New%20York,US&limit=1&appid=${apiKey}`
      );
      const geoData = await geoRes.json();

      if (geoData && geoData.length > 0) {
        const { lat, lon } = geoData[0];
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}`
        );
        const weatherData = await weatherRes.json();
        setWeatherData(weatherData);
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchWeatherData}>Get Weather for New York, USA</button>
      {weatherData && weatherData.daily && (
        <div>
          <h2>Weather for New York, USA</h2>
          <p>Temperature: {weatherData.daily[0].temp.day}°C</p>
          <p>Description: {weatherData.daily[0].weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
