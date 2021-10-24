import "../kaboom";

export function loadBattleUI(player) {

  addSpellBoxToGUI();
  addSpellButtonsToGUI(player);

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

function addSpellButtonsToGUI(player) {
  //divide rect into 6 parts 1/6, 3/6, 5/6
  const spellButtonCordinates = [
    [107, 385], [320, 385], [533, 385], [107, 435], [320, 435], [533, 435]
  ];
  for (let i = 0; i < player.gameObj.spellBook.length; i++) {
    generateSpellButton(player.gameObj.spellBook[i], spellButtonCordinates[i][0], spellButtonCordinates[i][1]);

  }
}

function activeButton() {
  return {
    id: "activeButton",
    require: ["area"],

  }
}



function lifespan(time) {
  let timer = 0;
  return {
    id: "lifespan",
    update() {
      timer -= dt();
      if (timer <= 0) {
        destroy(this);
      }
    },
  };
}

function generateSpellButton(spell, posX, posY) {
  const spellButton = add([
    text(spell.name, { size: 18 }),
    pos(posX, posY),
    area(),
    z(1),
    scale(1),
    origin("center"),
    "spellButton",
    {
      alreadyCast: false
    }
  ]);

  spellButton.clicks(() => debug.log(spell.description));

  spellButton.clicks(() => spellButton.alreadyCast = true);

  spellButton.clicks(() => debug.log(spellButton.alreadyCast));

  //left off working here on getting the spell buttons to become inactive after being cast.



  spellButton.hovers(() => spellButton.scaleTo(1.02), () => spellButton.scaleTo(1));
}
