import L from "leaflet";

import aircraftIconImage from "../../assets/icons/aircraft.png";
import radarIconImage from "../../assets/icons/radar.png";

export const aircraftIcon = L.icon({
  iconUrl: aircraftIconImage,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

export const radarIcon = L.icon({
  iconUrl: radarIconImage,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});