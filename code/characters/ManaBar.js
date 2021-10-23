import "../kaboom";

export class ManaBar {

  constructor(posX, posY) {
    this.manaBar = this.playerManaBar(posX, posY);
  }

  playerManaBar(posX, posY, player) {
    const manaBar = [];
    //Hard coded mana becuase I expect it to be const
    for (let i = 0; i < 6; i++) {
      manaBar[i] = this.createManaSprite(posX + (i * 22), posY);
    }
    return manaBar;
  }

  createManaSprite(posX, posY) {
    const manaCrystal = add([
      sprite("mana_crystal"),
      pos(posX, posY),
      scale(1),
      origin("center"),
      z(1),
      scale(.7),
    ]);
  }

}


