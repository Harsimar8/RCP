export interface AircraftDef {
  id: string;
  name: string;

  maxSpeed: number;
  cruiseSpeed: number;

  serviceCeiling: number;
  fuelCapacity: number;

  radarDefId?: string;
  engineDefId?: string;

  turnRate: number;

  maxRangeSqr: number;

  rcs: number;

  threatScore: number;
}