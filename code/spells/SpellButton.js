import "../kaboom";
import { gameObjConfigs } from "../gameObjConfigs.js";


export class SpellButton {
  active = true;

  constructor(spell, player) {
    this.spell = spell;
    this.player = player;
    this.gameObj = add(gameObjConfigs.spellButton);
    this.gameObj.use(text(`${this.spell.cost} ${this.spell.name} ${this.spell.damage}`, { size: 15 }));
    this.addMouseInteractions();


  }//end of ctor



  addMouseInteractions() {
    // UI feedback over buttons. When hovering inc button size, when not return to normal size.
    this.gameObj.hovers(() => {
      if (this.active) {
        this.gameObj.scaleTo(1.1);
      }
    }, () => this.gameObj.scaleTo(1));

    //UI prevent user from clicking a spell twice
    this.gameObj.clicks(() => {
      if (this.active && this.player.manaBar.enoughResAvailable(this.spell.cost)) {
        if (this.spell.spellCast(this.player)) {
          this.active = false;
          this.gameObj.color = rgb(160, 160, 160);
          this.gameObj.scaleTo(1);
        }

      }

    }
    );
  }
}