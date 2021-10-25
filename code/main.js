import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./characters/Character.js";
import { BattleSpellsMenu } from "./UI/BattleUI.js";


loadSprites();


const player = new Character("hero", [95, 305], 2, true, false);
const enemy = new Character("enemy", [540,85],2, false, true);
const spellsMenu = new BattleSpellsMenu(player);
//Right now the spellbutton array is being passed back. Not Ideal but it'll work until I figure out how I want the combat loop to work.

// while(enemy.gameObj.healthBar.isAlive()){
//   //players turn
  
// }


//attack(player, enemy, mySpells[0]);

//Kind of weird but I'll work on cleaning it up!


