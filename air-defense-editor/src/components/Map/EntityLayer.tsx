import { Marker, Popup } from "react-leaflet";
import { useSimulationStore } from "../../store/simulationStore";
import { aircraftIcon, radarIcon } from "./MapIcons";

export default function EntityLayer() {
  const entities = useSimulationStore((state) => state.entities);
  const selectEntity = useSimulationStore((state) => state.selectEntity);

  return (
    <>
      {entities.map((entity) => {

        const icon =
          entity.type === "Aircraft"
            ? aircraftIcon
            : entity.type === "Radar"
            ? radarIcon
            : undefined;

        return (
          <Marker
            key={entity.id}
            icon={icon}
            position={[entity.position.y, entity.position.x]}
            eventHandlers={{
              click: () => selectEntity(entity.id),
            }}
          >
            <Popup>{entity.name}</Popup>
          </Marker>
        );
      })}
    </>
  );
}