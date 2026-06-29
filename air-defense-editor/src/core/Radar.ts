import { Entity } from "./Entity";
import { Position } from "./Position";
import { EntityType } from "./EntityType";

export class Radar extends Entity {
  range: number;
  rotationSpeed: number;

  constructor(
    id: number,
    name: string,
    position: Position,
    range: number,
    rotationSpeed: number
  ) {
    super(id, name, EntityType.Radar, position);

    this.range = range;
    this.rotationSpeed = rotationSpeed;
  }
}