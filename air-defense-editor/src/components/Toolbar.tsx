import { useSimulationStore } from "../store/simulationStore";
import { EditorTool } from "../core/EditorTool";

export default function Toolbar() {
  const currentTool = useSimulationStore((state) => state.currentTool);
  const setTool = useSimulationStore((state) => state.setTool);

  const buttonStyle = (tool: EditorTool) => ({
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor:
      currentTool === tool ? "#4CAF50" : "#d3d3d3",
    color: currentTool === tool ? "white" : "black",
  });

  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "#1f2937",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
      }}
    >
      <button
        style={buttonStyle(EditorTool.Select)}
        onClick={() => setTool(EditorTool.Select)}
      >
        🖱 Select
      </button>

      <button
        style={buttonStyle(EditorTool.Aircraft)}
        onClick={() => setTool(EditorTool.Aircraft)}
      >
        ✈ Aircraft
      </button>

      <button
        style={buttonStyle(EditorTool.Radar)}
        onClick={() => setTool(EditorTool.Radar)}
      >
        📡 Radar
      </button>

      <button
        style={buttonStyle(EditorTool.SamBattery)}
        onClick={() => setTool(EditorTool.SamBattery)}
      >
        🚀 SAM
      </button>

      <button
        style={buttonStyle(EditorTool.Target)}
        onClick={() => setTool(EditorTool.Target)}
      >
        🎯 Target
      </button>
    </div>
  );
}