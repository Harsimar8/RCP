import { useSimulationStore } from "../store/simulationStore";

export default function PropertyPanel() {
  const selectedEntity = useSimulationStore(
    (state) => state.selectedEntity
  );

  return (
    <div
      style={{
        width: "300px",
        background: "#ffffff",
        borderLeft: "1px solid #ccc",
        padding: "20px",
      }}
    >
      <h2>Properties</h2>

      {!selectedEntity ? (
        <p>No entity selected.</p>
      ) : (
        <>
          <p><strong>ID:</strong> {selectedEntity.id}</p>

          <p><strong>Name:</strong> {selectedEntity.name}</p>

          <p><strong>Type:</strong> {selectedEntity.type}</p>

          <p><strong>X:</strong> {selectedEntity.position.x}</p>

          <p><strong>Y:</strong> {selectedEntity.position.y}</p>

          <p><strong>Altitude:</strong> {selectedEntity.position.altitude}</p>
        </>
      )}
    </div>
  );
}