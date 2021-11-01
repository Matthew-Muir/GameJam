import "../kaboom";
import { SpellButton } from "./SpellButton.js";
import { globalSpellBook } from "./Spells.js";


export class SpellBar {

  constructor(player) {

    this.player = player;
    this.spellBar = this.createSpellBar(this.player);

  }

  createSpellBar(player) {
    const resourceArray = [];
    const spritePositions = this.spritePosGrid([0, 320], 3, 2, 640,100);

    for (let k = 0; k < 6; k++) {
      const resource = new SpellButton(globalSpellBook[k],player);
      //debug.log(spritePositions.length);
      resource.gameObj['pos'] = spritePositions[k];
      resourceArray.push(resource);
    }
    //fix the cordinates seem to be way out of wack

    return resourceArray;
  }

  //returns an array of objects;
  spritePosGrid(startingXY, cols, rows, width, height) {
    const spriteCordinateArray = [];
    //xPos = ( width / cols ) / 2 + (width/cols * I );
    for (let r = 1; r <= rows; r++) {

      const yOffset = height / rows;
      const yPos = ((yOffset) / 2 + (yOffset * r)) + startingXY[1];

      let xPos = 0; // set value in next for loop

      for (let c = 0; c < cols; c++) {

        const xOffset = width / cols;
        xPos = ((xOffset) / 2 + (xOffset * c)) + startingXY[0];
        spriteCordinateArray.push({ x: xPos, y: yPos });
      }

    }

    return spriteCordinateArray;


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

