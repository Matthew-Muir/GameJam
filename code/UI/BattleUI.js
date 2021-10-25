import "../kaboom";
import { addSpriteToScreen } from "./SpriteSpawn.js";


export class BattleSpellsMenu {
  spellMenuBox = addSpriteToScreen("selection_box",320,415,null,{x:4,y:2.5},false);
  constructor(player) {
    this.player = player;
  }
}

export function loadBattleUI(player, enemy) {


  addSpellBoxToGUI();
  return addSpellButtonsToGUI(player);

}

//function to load character sprites
function addPlaySprite(character) {
  character.spirte()
}

function addSpellBoxToGUI() {
  const spellBoxUI = add([
    sprite("selection_box"),
    pos(320, 415),
    scale(4, 2.5),
    origin("center"),
    z(1)
  ]);
}
//places buttons on GUI. Also creates them by calling the generateSpellButton method.
function addSpellButtonsToGUI(player) {
  //divide rect into 6 parts 1/6, 3/6, 5/6
  const spellButtonCordinates = [
    [107, 385], [320, 385], [533, 385], [107, 435], [320, 435], [533, 435]
  ];
  const spellButtonArray = [];
  for (let i = 0; i < player.gameObj.spellBook.length; i++) {
   spellButtonArray.push(generateSpellButton(player.gameObj.spellBook[i], spellButtonCordinates[i][0], spellButtonCordinates[i][1]));
  }
  return spellButtonArray;
}



function generateSpellButton(spell, posX, posY) {
  //create spell button as game object
  const spellButton = add([
    text(spell.name, { size: 18 }),
    pos(posX, posY),
    area(),
    z(1),
    scale(1),
    origin("center"),
    "spellButton",
    color(),
    {
      alreadyCast: false,
      spellObj: spell
    }
  ]);

  //Logic for if a sb is clickable. And what to do after it's been clicked
  spellButton.clicks(() => {
    if (!spellButton.alreadyCast) {
      debug.log(spell.description);
      spellButton.alreadyCast = true;
      spellButton.color = { r: 160, g: 160, b: 160 };
      spellButton.scaleTo(1);
    }
  });

  //Logic for if a sb is hoverable. And what to do if it is.
  //The logic of hovers(func when hovering, func when done hovering)
  spellButton.hovers((sb) => {
    if (!spellButton.alreadyCast) {
      spellButton.scaleTo(1.02);
    }
  }
    , () => spellButton.scaleTo(1));

    return spellButton;
}

