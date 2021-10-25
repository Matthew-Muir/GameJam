import "../kaboom";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";


export class Mana{
  active = true;
  spriteScale = .65;
  spriteName = "mana_crystal";
  
  constructor(isPlayers, spriteSpacing){

    this.spritePos = isPlayers ? [210, 340] : [15, 50];
    
    this.gameObj = addSpriteToScreen(this.spriteName,this.spritePos[0] + spriteSpacing,this.spritePos[1],null,this.spriteScale, false);
  }
}


// createManaSprite(posX, posY) {
//     const manaCrystal = add([
//       sprite("mana_crystal"),
//       pos(posX, posY),
//       scale(1),
//       origin("center"),
//       z(1),
//       scale(.7),
//     ]);
//   }