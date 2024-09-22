const getWeatherForecast = async (latitude, longitude) => {
  const WEATHER_KEY = "8a2a070de57147c1a9b365d32e29bf18";
  const endpoint = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(
        `Error fetching weather data: ${response.status} ${response.statusText}`
      );
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Error in getWeatherForecast:", error);
    return null;
  }
};

export { getWeatherForecast };
