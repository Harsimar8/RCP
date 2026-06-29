import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMapEvents,
} from "react-leaflet";

import { useSimulationStore } from "../store/simulationStore";
import { EditorTool } from "../core/EditorTool";

function MapClickHandler() {
  const currentTool = useSimulationStore((state) => state.currentTool);
  const addAircraft = useSimulationStore((state) => state.addAircraft);
  const addRadar = useSimulationStore((state) => state.addRadar);
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      if (currentTool === EditorTool.Aircraft) {
        addAircraft(lng, lat);
      }
      if (currentTool === EditorTool.Radar) {
    addRadar(lng, lat);
}
    },
  });

  return null;
}

export default function MapView() {
  const entities = useSimulationStore((state) => state.entities);
  const selectEntity = useSimulationStore((state) => state.selectEntity);

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

       {entities.map((entity) => (
  <>
    <Marker
      key={entity.id}
      position={[entity.position.y, entity.position.x]}
      eventHandlers={{
        click: () => selectEntity(entity.id),
      }}
    >
      <Popup>{entity.name}</Popup>
    </Marker>

    {entity.type === "Radar" && (
      <Circle
        center={[entity.position.y, entity.position.x]}
        radius={(entity as any).range}
        pathOptions={{
          color: "green",
          fillColor: "green",
          fillOpacity: 0.15,
        }}
      />
    )}
  </>
))}
      </MapContainer>
    </div>
  );
}