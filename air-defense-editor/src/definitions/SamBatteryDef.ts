export interface SamBatteryDef {
  id: string;
  name: string;

  radarDefId: string;

  missileDefId: string;

  engagementRangeSqr: number;

  missileCapacity: number;

  reloadTime: number;
}