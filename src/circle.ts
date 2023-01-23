import { app, rgbColor } from "./app";
import { Graphics } from "pixi.js";

export class TCircle {
    color: number
    posX: number
    posY: number
    size: number

    constructor({ 
        color = rgbColor([1, 1, 1]), 
        posX = 0, 
        posY = 0, 
        size = 10, 
    }) {
        this.color = color
        this.posX = posX,
        this.posY = posY,
        this.size = size
    }

    render(): void {
        const circle = new Graphics();
        circle.beginFill(this.color)
            .drawCircle(this.posX, this.posY, this.size,)
            .endFill();
        app.stage.addChild(circle);
    }
}