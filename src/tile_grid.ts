import { app, PIXI } from "./app";
import { Tile } from "./tile";

export class TileGrid {
    tilePerRow: number

    // U,R,D,L
    entropy: Map<string, number[]> = new Map([
        ['blank', [0, 0, 0, 0]],
        ['left_right', [0, 1, 0, 1]],
        ['up_down', [1, 0, 1, 0]],
        ['left', [1, 0, 1, 1]],
        ['right', [1, 1, 1, 0]],
        ['up', [1, 1, 0, 1]],
        ['down', [0, 1, 1, 1]]
    ]);
    
    generateRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    constructor({
        tilePerRow = 4, 
    }) {
        this.tilePerRow = tilePerRow
    }

    async render() {
        let grid = [];
        
        let tileSize = app.view.width / this.tilePerRow;
        const keysArr = Array.from(this.entropy.keys());
        const firstTileName = keysArr[this.generateRandomNumber(0, keysArr.length - 1)];

        grid.push(firstTileName);
        
        await new Tile({
            posX: 0,
            posY: 0,
            size: tileSize,
        }).render(firstTileName);
        
        for(let i = 0; i < this.tilePerRow; i++) {
            for(let j = 0; j < this.tilePerRow; j++) {
                if (i == 0 && j == 0) continue;
                
                if (i == 0) {
                    const prevPiece = grid.at(-1);
                    const rightValue = this.entropy.get(prevPiece)[1];
                    const possiblePieces = [];

                    this.entropy
                        .forEach((value: number[], key: string) => {
                            if (value[3] == rightValue) possiblePieces.push(key);
                        });

                    const keysArr = Array.from(possiblePieces);
                    const tileName = keysArr[this.generateRandomNumber(0, keysArr.length - 1)];

                    grid.push(tileName);

                    await new Tile({
                        posX: tileSize * j,
                        posY: tileSize * i,
                        size: tileSize,
                    }).render(tileName);
                }  else if (j == 0) {
                    const prevPiece = grid.at(-this.tilePerRow);
                    const downValue = this.entropy.get(prevPiece)[2];
 
                    const possiblePieces = [];

                    this.entropy
                        .forEach((value: number[], key: string) => {
                            if (value[0] == downValue) possiblePieces.push(key);
                        });

                    const keysArr = Array.from(possiblePieces);
                    const tileName = keysArr[this.generateRandomNumber(0, keysArr.length - 1)];

                    grid.push(tileName);

                    await new Tile({
                        posX: tileSize * j,
                        posY: tileSize * i,
                        size: tileSize,
                    }).render(tileName);
                } else {
                    const prevPieceHorizontal = grid.at(-1);
                    const rightValue = this.entropy.get(prevPieceHorizontal)[1];

                    const prevPieceVertical = grid.at(-this.tilePerRow);
                    const downValue = this.entropy.get(prevPieceVertical)[2];

                    console.log('(i: ' + i + ', j:' + j + ')' + 'prev hor: ' + prevPieceHorizontal + ' | prev ver: ' + prevPieceVertical);
                    const possiblePieces = [];

                    this.entropy
                        .forEach((value: number[], key: string) => {
                            if (value[0] == downValue && value[3] == rightValue) possiblePieces.push(key);
                        });

                    const keysArr = Array.from(possiblePieces);
                    const tileName = keysArr[this.generateRandomNumber(0, keysArr.length - 1)];

                    grid.push(tileName);

                    await new Tile({
                        posX: tileSize * j,
                        posY: tileSize * i,
                        size: tileSize,
                    }).render(tileName);
                }
            }   
        }
    }
}

// obter valor R da peca anterior
// ir buscar ao array de entropy pecas com o mesmo valor pra L
// fazer random dessa sub array