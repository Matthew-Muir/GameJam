import "../kaboom";
import { HealthBar } from "../health/HealthBar.js";
import { ManaBar } from "../mana/ManaBar.js";
import { getGlobalSpellBook } from "../spells/Spells.js";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";
import { SpellBar } from "../spells/SpellBar.js";

export class Character {

  health = 12;
  mana = 6; //for testing. change to 0 later
  spellBook = getGlobalSpellBook();


  constructor(spriteName, screenPos, spriteScaling, isPlayer, flipSpriteX, opponent) {
    this.opponent = opponent;
    this.isPlayer = isPlayer;
    this.healthBar = new HealthBar(this);
    this.manaBar = new ManaBar(this);
    this.spellBar = isPlayer ? new SpellBar(this) : null;


    this.spritePosition = isPlayer ? [200, 340] : [15, 85];


    this.gameObj = addSpriteToScreen(spriteName, screenPos[0], screenPos[1], "idle", spriteScaling, flipSpriteX);
  }


}

