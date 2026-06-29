import { Position } from "./Position";

export interface Aircraft {
    id: number;
    name: string;
    position: Position;
    speed: number;
    heading: number;
    fuel: number;
}