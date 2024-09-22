import { saveTrip } from "./js/app.js";
import "./styles/index.scss";

const saveTripButton = document.getElementById("save-trip");

if (saveTripButton) {
  saveTripButton.addEventListener("click", () => saveTrip());
}
