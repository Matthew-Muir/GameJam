import "../kaboom";


export class HealthBar {

  constructor(posX, posY, character) {
  this.charcter = character;
  this.healthBar = this.playerHealthBar(posX, posY, character);
  }

  

  playerHealthBar(posX, posY, player) {
    const healthBar = [];
    for (let i = 0; i < player.health; i++) {
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


const eh01 = add([
  sprite("heart"),
  pos(135, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);

const eh02 = add([
  sprite("heart"),
  pos(165, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);





// function playerHealthBar(posX, posY, player) {
//   const healthBar = [];
//   for (let i = 0; i < player.health; i++) {
//     healthBar[i] = createHeartSprite(posX + (i * 30), posY);
//   }
// }
// playerHealthBar(460, 310, player);