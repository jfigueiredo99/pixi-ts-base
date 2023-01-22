import * as PIXI from "pixi.js";
import { TCircle } from "./circle";
import { Graphics } from "pixi.js";

const rgbColor = PIXI.utils.rgb2hex;

const children: any[] = [];
const appBg = rgbColor([0, 1, 1]);
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: appBg,
});
// const stage = app.stage;
// stage.interactive = true;

// const mouseEvents = ["pointerdown", "pointerup", "pointerover", "pointerout"];
// const events = flyd.stream();
// flyd.on(e => console.log(e), events);
function init() {
    //   children.map(x => app.stage.addChild(x));
    // const viewElement = app.view;
    // const evTgts = ["click"];
    // evTgts.map(tgt => viewElement.addEventListener(tgt, events));
    document.body.appendChild(app.view);

    // const circle = new Graphics();
    // circle.beginFill(rgbColor([1, 0, 0]))
    //     .drawCircle(80, 80, 40)
    //     .endFill();
    
    const circle = new TCircle(app,rgbColor([1, 0, 0])).render();
    const circle2 = new TCircle(app,rgbColor([0, 1, 0])).render();

    // app.stage.addChild(circle);

}

export default init();
