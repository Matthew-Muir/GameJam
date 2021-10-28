import "../kaboom";
import { Mana } from "./Mana.js";

export class ManaBar {
  manaAvailable = 6;
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

  useMana(manaCost) {
    if(manaCost <= this.manaAvailable) {
      for(let i = this.manaBar.length - 1; i >= 0; i--){
        const currentManaCrystal = this.manaBar[i];
        if(currentManaCrystal.active) {
          currentManaCrystal.active = false;
          currentManaCrystal.gameObj.color = { r: 190, g: 190, b: 190 };
          this.manaAvailable --;
          manaCost--;

          if(manaCost == 0){
            break;
          }
        }
      }
      return true;
    }
    return false;
  }

  addMana(amountToAdd) {
    if(amountToAdd + this.manaAvailable > 6) {
      this.manaAvailable = 6;
    }
    else {
      this.manaAvailable += amountToAdd;
    }
  }

  



}


