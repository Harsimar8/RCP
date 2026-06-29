import { Circle } from "react-leaflet";
import { useSimulationStore } from "../../store/simulationStore";

export default function RadarLayer() {
  const entities = useSimulationStore((state) => state.entities);

  console.log("All entities:", entities);

  return (
    <>
      {entities
        .filter((entity) => {
          console.log(entity.type);
          return entity.type === "Radar";
        })
        .map((entity) => (
          <Circle
            key={entity.id}
            center={[entity.position.y, entity.position.x]}
            radius={(entity as any).range}
            pathOptions={{
              color: "red",
              weight: 4,
              fillColor: "red",
              fillOpacity: 0.3,
            }}
          />
        ))}
    </>
  );
}