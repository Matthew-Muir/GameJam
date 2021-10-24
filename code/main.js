import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./characters/Character.js";
import {loadBattleUI} from "./BattleUI/BattleUI.js";

loadSprites();


const player = new Character("hero", [95, 305], 2, null, true);
const enemy = new Character("enemy", [540,85],2,"Vhaus", false, true);
//Right now the spellbutton array is being passed back. Not Ideal but it'll work until I figure out how I want the combat loop to work.
const mySpells = loadBattleUI(player);




