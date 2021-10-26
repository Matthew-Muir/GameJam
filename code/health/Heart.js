import "../kaboom";
import { addSpriteToScreen } from "../UI/SpriteSpawn";

export class Heart {
  active = true;
  spriteScale = 1.25;
  spriteName = "heart";


  constructor(isPlayer, spriteSpacing) {
    this.spritePos = isPlayer ? [340, 340] : [15, 20];
    this.gameObj = addSpriteToScreen(this.spriteName, this.spritePos[0] + spriteSpacing, this.spritePos[1], null, this.spriteScale, false);
  }
}