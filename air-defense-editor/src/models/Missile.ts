import { Position } from "./Position";

export interface Missile {
    id: number;
    name: string;
    position: Position;
    speed: number;
    targetId: number | null;
}