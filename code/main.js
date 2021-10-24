import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./characters/Character.js";
import {loadBattleUI} from "./characters/BattleUI.js";

loadSprites();


const player = new Character("hero", [95, 305], 2, null, true);
const enemy = new Character("enemy", [540,85],2,"Vhaus", false, true);
loadBattleUI(player);








