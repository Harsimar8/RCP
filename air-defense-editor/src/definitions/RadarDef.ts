export interface RadarDef {
  id: string;
  name: string;

  maxRangeSqr: number;

  minAltitude: number;
  maxAltitude: number;

  minElevationDeg: number;
  maxElevationDeg: number;

  scanRate: number;

  falseAlarmRate: number;

  trackCapacity: number;
}