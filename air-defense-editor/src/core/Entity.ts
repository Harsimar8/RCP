import { Position } from "./Position";

export class Entity {
  id: number;
  name: string;
  type: string;
  position: Position;
  isSelected: boolean;
  isVisible: boolean;

  constructor(
    id: number,
    name: string,
    type: string,
    position: Position
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.position = position;

    this.isSelected = false;
    this.isVisible = true;
  }
}