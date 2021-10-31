import "../kaboom";
import { gameObjConfigs } from "../gameObjConfigs.js";





//use this to group and maintain hud elements.
export class Battlefield {
  playerMenuBar = add(gameObjConfigs.spellBar.gameObjComps);
  enemyStatBar =  add(gameObjConfigs.enemyStatBar.gameObjComps);
}