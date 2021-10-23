import "../kaboom";


export class HealthBar {

  constructor(posX, posY) {
    this.healthBar = this.playerHealthBar(posX, posY);
  }

  playerHealthBar(posX, posY, player) {
    const healthBar = [];
    //Hard coded health becuase I don't expect health to be constant
    for (let i = 0; i < 12; i++) {
      healthBar[i] = this.createHeartSprite(posX + (i * 25), posY);
    }
    return healthBar;
  }

  createHeartSprite(posX, posY) {
    const heart = add([
      sprite("heart"),
      pos(posX, posY),
      scale(1),
      origin("center"),
      z(1),
      scale(1.25),
    ]);
  }

}

