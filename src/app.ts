
import * as PIXI from "pixi.js";


const rgbColor = PIXI.utils.rgb2hex;
const appBg = rgbColor([0.59, 0.59, 0.59]);

const app = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundColor: appBg,
    // transparent: true,
});

// IMPORT ASSETS - THEY MUST BE AT "DIST/IMAGES"
app.loader.baseUrl = "images";
app.loader.add("blank", "blank.png");
app.loader.add("down", "down.png");
app.loader.add("left_right", "left_right.png");
app.loader.add("left", "left.png");
app.loader.add("right", "right.png");
app.loader.add("up_down", "up_down.png");
app.loader.add("up", "up.png");
app.loader.add("tile", "tile.png");
app.loader.add("dirt", "dirt.png");
app.loader.add("path", "path.png");


export { app, PIXI, rgbColor }