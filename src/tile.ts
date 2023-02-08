import {app, PIXI} from "./app";
import {Edges} from "./edges";


export class Tile {
    posX: number
    posY: number
    size: number
    entropy: number
    edges: Edges
    resource: string

    constructor({
                    posX = 0,
                    posY = 0,
                    size = 10,
                    entropy = 7,
                    resource = "left"
                }) {
        this.posX = posX,
            this.posY = posY,
            this.size = size,
            this.entropy = entropy,
            this.resource = resource
    }

    async render() {
        let sprite;
        try {
            const texture = await app.loader.resources[this.resource].texture;
            this.edges = new Edges(this.createPossibleTiles(["blank"]), this.createPossibleTiles(["up_down", "up", "left", "right"]));
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
            this.posX + (this.size / 2),
            this.posY + (this.size / 2),
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

    private createPossibleTiles(resources: string[]) {
        let tiles = [];
        for (let i = 0; i < resources.length; i++) {
            let tile = new Tile({
                posX: this.posX + 1,
                posY: this.posY,
                size: this.size,
                entropy: 7,
                resource: resources[i]
            });
            tiles.concat(tile);
        }
        return tiles;
    }
}


export abstract class BaseTile {

}