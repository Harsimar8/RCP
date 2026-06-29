import { create } from "zustand";

import { Entity } from "../core/Entity";
import { Aircraft } from "../core/Aircraft";
import { Position } from "../core/Position";
import { EditorTool } from "../core/EditorTool";
import { Radar } from "../core/Radar";

interface SimulationStore {
  entities: Entity[];

  selectedEntity: Entity | null;

  currentTool: EditorTool;

  setTool: (tool: EditorTool) => void;

  addAircraft: (x: number, y: number) => void;
  addRadar: (x: number, y: number) => void;

  removeEntity: (id: number) => void;

  selectEntity: (id: number) => void;
}

export const useSimulationStore = create<SimulationStore>((set, get) => ({

  entities: [],

  selectedEntity: null,

  currentTool: EditorTool.Select,

  setTool: (tool) =>
    set({
      currentTool: tool,
    }),

  addAircraft: (x, y) => {

    const aircraft = new Aircraft(
      Date.now(),
      "F-16",
      new Position(x, y, 10000),
      900,
      90,
      10000
    );

    set({
      entities: [...get().entities, aircraft],
    });
  },

  addRadar: (x, y) => {
  const radar = new Radar(
    Date.now(),
    "AN/TPS Radar",
    new Position(x, y, 0),
    50000,   // detection range in meters
    30       // rotation speed
  );

  set({
    entities: [...get().entities, radar],
  });
},

  removeEntity: (id) => {

    set({
      entities: get().entities.filter(
        (e) => e.id !== id
      ),
    });

  },

  selectEntity: (id) => {

    const entity = get().entities.find(
      (e) => e.id === id
    );

    set({
      selectedEntity: entity ?? null,
    });

  },

}));