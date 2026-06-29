import { Position } from "./Position";

export interface Target {
    id: number;
    name: string;
    position: Position;
    isDestroyed: boolean;
}