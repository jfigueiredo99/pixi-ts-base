import * as PIXI from "pixi.js";
import { Graphics } from "pixi.js";

export class TCircle {
    app: PIXI.Application;
    color: number;

    constructor(app: PIXI.Application, color: number) {
        this.app = app;
        this.color = color;
    }

    render() {
        const circle = new Graphics();
        circle.beginFill(this.color)
        .drawCircle(240, 80, 40)
        .endFill();
        this.app.stage.addChild(circle);

    }
}