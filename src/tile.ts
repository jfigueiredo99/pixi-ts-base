import { app, PIXI } from "./app";

export class Tile {
    posX: number
    posY: number
    size: number
        
    constructor({ 
        posX = 0, 
        posY = 0, 
        size = 10, 
    }) {
        this.posX = posX,
        this.posY = posY,
        this.size = size
    }

    async render(tileName: string) {
        let sprite;
        try {
            const texture = await app.loader.resources[tileName].texture;
            sprite = new PIXI.Sprite(texture);
        } catch (err) {
            console.log(`FAILED loading texture`);
            console.log(err);
        }
        // SET SPRITE POSITION ANCHOR
        sprite.anchor.x = 0.5
        sprite.anchor.y = 0.5
        // WE NEED TO ADD HALF THE SIZE SINCE THE ANCHOR IS AT THE MIDDLE
        sprite.position.set(
            this.posX + (this.size/2),
            this.posY + (this.size/2),
        );
        sprite.width = this.size;
        sprite.height = this.size;
        // ROTATION GUIDE
        // 2PI = 360º
        // 3PI/2 = 270º
        // PI = 180º
        // PI/2 = 90º
        // sprite.rotation = 2*Math.PI
        

        app.stage.addChild(sprite);
    }
}

export abstract class BaseTile {

}