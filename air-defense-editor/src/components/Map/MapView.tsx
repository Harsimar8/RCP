import { MapContainer, TileLayer } from "react-leaflet";

import MapClickHandler from "./MapClickHandler";
import EntityLayer from "./EntityLayer";
import RadarLayer from "./RadarLayer";

export default function MapView() {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler />

        <RadarLayer />

        <EntityLayer />
      </MapContainer>
    </div>
  );
}