import { app } from "./app";
import { TCircle } from "./circle";
import { Tile } from "./tile"
import { TileGrid } from "./tile_grid";

function init() {
    document.body.appendChild(app.view);
    app.ticker.add(delta => update(delta));
    
    app.loader.load(() => { 
        new TileGrid({
            tilePerRow: 
            10,
        }).render();
    });
    
}


function update(delta) {
    
}

export default init();
