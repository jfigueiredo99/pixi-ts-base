import {Tile} from "./tile";

export class Edges {
    right: Tile[]
    bottom: Tile[]


    constructor(right: Tile[], bottom: Tile[]) {
        this.right = right;
        this.bottom = bottom;
    }
}