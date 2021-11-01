import "../kaboom";
import { gameObjConfigs } from "../gameObjConfigs.js";


export class SpellButton {
  active = true;

  constructor(spell, player) {
    this.spell = spell;
    this.player = player;
    this.gameObj = add(gameObjConfigs.spellButton);
    this.gameObj.use(text(this.spell.name, { size: 20 }));
    //this.gameObj.hovers();
    //this.gameObj.clicks(() => debug.log("click"));
    this.addMouseInteractions();


  }//end of ctor



  addMouseInteractions() {
    // UI feedback over buttons. When hovering inc button size, when not return to normal size.
    this.gameObj.hovers(() => {
      if (!this.active) {
        this.gameObj.scaleTo(1.02);
      }
    }, () => this.gameObj.scaleTo(1));

    //UI prevent user from clicking a spell twice
    this.gameObj.clicks(() => {
      if (!this.active && this.player.manaBar.enoughResAvailable(this.spell.cost)) {
        this.active = true;
        this.gameObj.color = { r: 160, g: 160, b: 160 };
        this.gameObj.scaleTo(1);
        debug.log("CLICK");
        //this.spell.spellCast(this.player);
      }

    }
    );
  }
}