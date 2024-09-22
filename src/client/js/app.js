import { getGeoDestination } from "../adapter/geoApi";
import { getWeatherForecast } from "../adapter/weatherApi";
import { updateResult } from "./render-trip";
import { saveTripData } from "./utils";

const SAVE_TRIP_DATA_URL = "http://localhost:8080/save-trip";
const btnSaveTrip = document.getElementById("save-trip");
const destinationTo = document.querySelector('input[name="destination"]');
const startDate = document.querySelector('input[name="start-date"]');
const endDate = document.querySelector('input[name="end-date"]');

document.addEventListener("DOMContentLoaded", () => {
  btnSaveTrip.addEventListener("click", saveTrip);
});

const isInputValid = (destination, startDate, endDate) =>
  destination.length > 0 &&
  startDate.length > 0 &&
  endDate.length > 0 &&
  new Date(endDate) >= new Date(startDate);

// Save Trip
const saveTrip = async (event) => {
  event.preventDefault();

  const destination = destinationTo.value.trim();
  const departureDate = startDate.value;
  const endingDate = endDate.value;

  if (!isInputValid(destination, departureDate, endingDate)) {
    alert(
      "Please enter a destination, start date, and end date (end date must be after start date)."
    );
    return;
  }

  try {
    const locationData = await getGeoDestination(destination);
    const { lat: locationLat, lng: locationLong } = locationData.geonames[0];

    const weatherData = await getWeatherForecast(locationLat, locationLong);
    console.log(weatherData);
    const temperature = weatherData.data[0].temp;
    const humidity = weatherData.data[0].rh;

    const tripData = await saveTripData(SAVE_TRIP_DATA_URL, {
      destination,
      departureDate,
      endingDate,
      temperature,
      humidity,
    });

    updateResult(tripData);
  } catch (error) {
    console.error("Error adding trip:", error);
  }
};

export { saveTrip };
