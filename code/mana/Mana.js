import "../kaboom";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";


export class Mana {
  active = true;
  spriteScale = .65;
  spriteName = "mana_crystal";

  constructor(isPlayers, spriteSpacing) {

    this.spritePos = isPlayers ? [210, 340] : [15, 50];

    this.gameObj = addSpriteToScreen(this.spriteName, this.spritePos[0] + spriteSpacing, this.spritePos[1], null, this.spriteScale, false);
  }
}
