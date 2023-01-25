import { app, PIXI } from "./app";

export class Tile {
    sprite: PIXI.Sprite
    posX: number
    posY: number
    size: number
    edges: Array<number> = [1, 0, 1, 1]

    constructor({
        posX = 0,
        posY = 0,
        size = 10,
    }) {
        this.posX = posX,
            this.posY = posY,
            this.size = size
    }

    async render() {
        try {
            const texture = await app.loader.resources["path"].texture;
            this.sprite = new PIXI.Sprite(texture);
        } catch (err) {
            console.log(`FAILED loading texture`);
            console.log(err);
        }
        // SET SPRITE POSITION ANCHOR
        this.sprite.anchor.x = 0.5
        this.sprite.anchor.y = 0.5
        // WE NEED TO ADD HALF THE SIZE SINCE THE ANCHOR IS AT THE MIDDLE
        this.sprite.position.set(
            this.posX + (this.size / 2),
            this.posY + (this.size / 2),
        );
        this.setSize();
        this.rotate(1);


        app.stage.addChild(this.sprite);
    }

    setSize(){
        this.sprite.width = this.size;
        this.sprite.height = this.size;
    }

    rotate(rotationNumber: number = 0) {
        // ROTATION GUIDE
        // 2PI = 360º
        // 3PI/2 = 270º
        // PI = 180º
        // PI/2 = 90º
        this.sprite.rotation = (Math.PI / 2) * rotationNumber;
        let oldEdges = this.edges.slice();
        for(let i = 0; i < 4; i++){
            let num = i + rotationNumber
            if (num >= 4){
                num -=4;
            }
            this.edges[num] = oldEdges[i];
        }
    }
}

export abstract class BaseTile {

}