import "../kaboom";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";

export class SpellButton {

  castThisTurn = false;

  constructor(spell, posX, posY, player) {
    this.spell = spell;
    this.player = player;
    this.gameObj = add([
      text(this.spell.name, { size: 18 }),
      pos(posX, posY),
      area(),
      z(1),
      scale(1),
      origin("center"),
      "spellButton",
      color(),
    ]);

    this.addMouseInteractions();

  }//end of ctor

  spellCast(player) {
    //left off here. Add logic so that spells damage opponent.
  }

  addMouseInteractions() {
    //UI feedback over buttons
    this.gameObj.hovers(() => {
      if (!this.castThisTurn) {
        this.gameObj.scaleTo(1.02);
      }
    }, () => this.gameObj.scaleTo(1));

    //UI prevent user from clicking a spell twice
    this.gameObj.clicks(() => {
      if (!this.castThisTurn) {
        debug.log(this.spell.description);
        this.castThisTurn = true;
        this.gameObj.color = { r: 160, g: 160, b: 160 };
        this.gameObj.scaleTo(1);
      }
    });
  }
}