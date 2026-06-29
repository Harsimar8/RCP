import { Entity } from "./Entity";
import { Position } from "./Position";
import { EntityType } from "./EntityType";

export class Aircraft extends Entity {
  speed: number;
  heading: number;
  altitude: number;

  constructor(
    id: number,
    name: string,
    position: Position,
    speed: number,
    heading: number,
    altitude: number
  ) {
    super(id, name, EntityType.Aircraft, position);

    this.speed = speed;
    this.heading = heading;
    this.altitude = altitude;
  }
}