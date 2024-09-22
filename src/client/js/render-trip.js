import { getImageURL } from "../adapter/pixabayApi";

const result = document.getElementById("result");
const elements = {
  location: document.getElementById("location"),
  departureDate: document.getElementById("departure-date"),
  completeDate: document.getElementById("complete-date"),
  leftDays: document.getElementById("left-days"),
  tripDuration: document.getElementById("trip-duration"),
  temperature: document.getElementById("temperature"),
  humidity: document.getElementById("relative-humidity"),
  illustrationLink: document.getElementById("illustration"),
};
const startDate = document.querySelector('input[name="start-date"]');
const endDate = document.querySelector('input[name="end-date"]');

const daysInterval = (start, end) =>
  Math.ceil((end - start) / (1000 * 60 * 60 * 24));

const getTripDuration = () => {
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);
  return daysInterval(start, end);
};

const getDaysLeft = () => {
  const today = new Date();
  const start = new Date(startDate.value);
  return daysInterval(today, start) + 1;
};

const updateResult = async (tripData) => {
  try {
    result.classList.remove("hidden");

    elements.location.textContent = tripData.location;
    elements.departureDate.textContent = tripData.startDate;
    elements.completeDate.textContent = tripData.endDate;
    elements.leftDays.textContent = getDaysLeft();
    elements.tripDuration.textContent = getTripDuration();
    elements.temperature.textContent = tripData.temperature;
    elements.humidity.textContent = tripData.humidity;
    elements.illustrationLink.src = await getImageURL(tripData.location);
  } catch (error) {
    console.error("Error updating UI:", error);
  }
};

export { updateResult };
