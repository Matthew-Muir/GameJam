import "../kaboom";


export class HealthBar {

  constructor(posX, posY) {
    this.healthBar = this.playerHealthBar(posX, posY);
  }

  playerHealthBar(posX, posY, player) {
    const healthBar = [];
    //Hard coded health becuase all characters will have 12 health
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
      {
        active: true
      }
    ]);
    return heart;
  }

  takeDamage(damage) {

    for(let i = this.healthBar.length; i >= 0; i--){
      const currentHeart = this.healthBar[i];
      if(currentHeart.active) {
        currentHeart.active = false;
        currentHeart.color = {r:190, g:190, b:190};
        damage--;
      }
      if(dmg == 0) {
        break;
      }
    }
  }

  isPlayerAlive(){
    let isAlive = false;

    this.healthBar.forEach(heart => {
      if(heart.active == true) {
        isAlive = true;
      }
      });
      return isAlive;
  }

}

