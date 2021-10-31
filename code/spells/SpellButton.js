import "../kaboom";
import { gameObjConfigs } from "../gameObjConfigs.js";


export class SpellButton {
active = true;

  constructor(spell, player) {
    this.spell = spell;
    this.player = player;
    this.gameObj = add(gameObjConfigs.spellButton);
    this.gameObj.use(text(this.spell.name, {size:20}));
    //this.addMouseInteractions();

  }//end of ctor



  addMouseInteractions() {
    //UI feedback over buttons
    this.gameObj.hovers(() => {
      if (!this.castThisTurn) {
        this.gameObj.scaleTo(1.02);
      }
    }, () => this.gameObj.scaleTo(1));

    //UI prevent user from clicking a spell twice
    this.gameObj.clicks(() => {
      if (!this.castThisTurn && this.player.manaBar.useMana(this.spell.cost)) {
        this.castThisTurn = true;
        this.gameObj.color = { r: 160, g: 160, b: 160 };
        this.gameObj.scaleTo(1);
        this.spell.spellCast(this.player);
        }

      }
    );
  }
}