import Toolbar from "../components/Toolbar";
import MapView from "../components/Map/MapView";
import PropertyPanel from "../components/PropertyPanel";
import CesiumView from "../components/Cesium/CesiumView";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Toolbar />

      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <CesiumView />
        <PropertyPanel />
      </div>
    </div>
  );
}