import "../kaboom";
import { HealthBar } from "./HealthBar.js";

export class Character {

  constructor(spriteName, screenPos, spriteScaling, characterName = "blank", isPlayerCharacter) {
    this.healthBarPosition = isPlayerCharacter ? [340,345] : [20,45];

    this.gameObj = add([
      sprite(spriteName, { anim: "idle" }),
      pos(screenPos[0], screenPos[1]),
      origin("center"),
      z(1),
      scale(spriteScaling),
      {
        health: 12,
        mana: 0,
        name: characterName,
        healthBar: new HealthBar(this.healthBarPosition[0],this.healthBarPosition[1])

      }
    ]);
  }
}


