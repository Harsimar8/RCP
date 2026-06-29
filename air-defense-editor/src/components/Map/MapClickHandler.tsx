import { useMapEvents } from "react-leaflet";
import { useSimulationStore } from "../../store/simulationStore";
import { EditorTool } from "../../core/EditorTool";

export default function MapClickHandler() {
  const currentTool = useSimulationStore((state) => state.currentTool);

  const addAircraft = useSimulationStore((state) => state.addAircraft);
  const addRadar = useSimulationStore((state) => state.addRadar);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      switch (currentTool) {
        case EditorTool.Aircraft:
          addAircraft(lng, lat);
          break;

        case EditorTool.Radar:
          addRadar(lng, lat);
          break;
      }
    },
  });

  return null;
}