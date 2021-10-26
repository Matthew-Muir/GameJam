import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./character/Character.js";

loadSprites();

const enemy = new Character("enemy", [540, 85], 2, false, true);
const player = new Character("hero", [95, 305], 2, true, false, enemy);





