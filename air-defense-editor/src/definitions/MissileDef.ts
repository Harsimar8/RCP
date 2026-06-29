export interface MissileDef {
  id: string;
  name: string;

  maxSpeed: number;

  maxRangeSqr: number;

  lethalRangeSqr: number;

  turnRate: number;

  seekerProbId?: string;

  guidanceType: string;
}