import { Position } from "./Position";

export interface Radar {
    id: number;
    name: string;
    position: Position;
    range: number;
    isActive: boolean;
}