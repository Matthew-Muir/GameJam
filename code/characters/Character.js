import "../kaboom";
import { HealthBar } from "./HealthBar.js";
import { ManaBar } from "./ManaBar.js";
import { getGlobalSpellBook } from "../Spells/Spells.js";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";

export class Character {

  health = 12;
  mana = 6; //for testing. change to 0 later
  spellBook = getGlobalSpellBook();
  

  constructor(spriteName, screenPos, spriteScaling, isPlayer, flipSpriteX) {
    
    this.isPlayer = isPlayer;
    this.healthBar = new HealthBar(this);
    this.manaBar = new ManaBar(this);


    this.spritePosition = isPlayer ? [200, 340] : [15, 85];


    this.gameObj = addSpriteToScreen(spriteName, screenPos[0], screenPos[1], "idle", spriteScaling, flipSpriteX);
  }

}


