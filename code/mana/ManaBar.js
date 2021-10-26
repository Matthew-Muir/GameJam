import "../kaboom";
import { Mana } from "./Mana.js";

export class ManaBar {

  constructor(player) {
    this.manaBar = this.createManaBar(player);
  }

  createManaBar(player) {

    const manaBar = [];
    const spaceBetweenSprites = 20;
    for (let i = 0; i < player.mana; i++) {
      manaBar[i] = new Mana(player.isPlayer, i * spaceBetweenSprites);
    }
    return manaBar;
  }



}


