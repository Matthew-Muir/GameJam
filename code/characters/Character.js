import "../kaboom";
import { HealthBar } from "./HealthBar.js";
import { ManaBar } from "./ManaBar.js";
import { getGlobalSpellBook } from "../Spells/Spells.js";

export class Character {

  constructor(spriteName, screenPos, spriteScaling, characterName, isPlayerCharacter, flipSpriteX = false) {

    this.healthBarPosition = isPlayerCharacter ? [340,340] : [15,50];
    this.manaBarPosition = isPlayerCharacter ? [200,340] : [15,85];
    this.gameObj = add([
      sprite(spriteName, { anim: "idle", flipX: flipSpriteX}),
      pos(screenPos[0], screenPos[1]),
      origin("center"),
      z(1),
      scale(spriteScaling),

      {
        name: characterName,
        healthBar: new HealthBar(this.healthBarPosition[0],this.healthBarPosition[1]),
        manaBar: new ManaBar(this.manaBarPosition[0],this.manaBarPosition[1]),
        spellBook: getGlobalSpellBook()
      },



    ]);
  }
}


