export class Position {
  x: number;
  y: number;
  altitude: number;

  constructor(
    x: number = 0,
    y: number = 0,
    altitude: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.altitude = altitude;
  }
}