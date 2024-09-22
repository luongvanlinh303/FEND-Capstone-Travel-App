export async function getWeatherForecast(latitude, longitude) {
  const WEATHER_KEY = "8a2a070de57147c1a9b365d32e29bf18";

  const endpoint =
    "https://api.weatherbit.io/v2.0/forecast/daily?" +
    `lat=${latitude}&lon=${longitude}&key=` +
    WEATHER_KEY;

  try {
    const res = await fetch("http://localhost:8080/forecast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endpoint: endpoint }),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
