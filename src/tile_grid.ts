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
        var tiles = [];
        for(let i = 0; i < this.tilePerRow;i++){
            for(let j = 0; j < this.tilePerRow;j++){
                let tile = new Tile({
                    posX: tileSize * j,
                    posY: tileSize * i,
                    size: tileSize,
                });
                tiles.concat(tile);
                this.refreshEntropy(tiles);
               await tile.render();
            }   
        }
    }

    private refreshEntropy(tiles: Tile[]) {
        for(let i = 0; i < tiles.length;i++) {
            tiles[i].entropy
        }
    }
}