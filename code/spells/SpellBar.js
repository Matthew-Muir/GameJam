import "../kaboom";
import { SpellButton } from "./SpellButton.js";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";


export class SpellBar {

  spellBarBackground = addSpriteToScreen("selection_box", 320, 415, null, { x: 4, y: 2.5 }, false);

  constructor(player) {

    this.spells = this.createSpellButtons(player);

  }

  createSpellButtons(player) {
    //divide rect into 6 parts 1/6, 3/6, 5/6
    const spellButtonCordinates = [
      [107, 385], [320, 385], [533, 385], [107, 435], [320, 435], [533, 435]];

    const spellButtonArray = [];

    for (let i = 0; i < player.spellBook.length; i++) {
      spellButtonArray.push(new SpellButton(player.spellBook[i], spellButtonCordinates[i][0], spellButtonCordinates[i][1], player));
    }
    return spellButtonArray;
  }

}

