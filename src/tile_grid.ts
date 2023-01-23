import { app, PIXI } from "./app";
import { Tile } from "./tile";

export class TileGrid {
    tilePerRow: number

    constructor({
        tilePerRow = 4, 
    }) {
        this.tilePerRow = tilePerRow
    }

    async render() {
        let tileSize = app.view.width / this.tilePerRow;
        for(let i = 0; i < this.tilePerRow;i++){
            for(let j = 0; j < this.tilePerRow;j++){
                new Tile({
                    posX: tileSize * j,
                    posY: tileSize * i,
                    size: tileSize,
                }).render();
            }   
        }
    }
}