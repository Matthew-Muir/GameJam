import "../kaboom";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";
import { Heart } from "./Heart.js";
/*
A health bar is an class object that contains the players hearts objects in an array. It also contains any functions to update and make alteration to the health bar.

~create health bar
~update health bar
~check health above 0
*/

export class HealthBar {
  healthAvailable = 12;
  constructor(player) {
    this.hearts = this.createHealthBar(player);
  }

  createHealthBar(player) {
    const healthBar = [];
    const spaceBetweenSprites = 25;

    for (let i = 0; i < player.health; i++) {
      healthBar[i] = new Heart(player.isPlayer, i * spaceBetweenSprites);
    }

    return healthBar;
  }

  //heals and damages player.
  updateHealthBar(damage) {
    //health player
    if (damage < 0) {
      damage = Math.abs(damage);

      for (let i = 0; i < this.hearts.length; i++) {
        const currentHeart = this.hearts[i];

        if (!currentHeart.active) {
          currentHeart.active = true;
          currentHeart.gameObj.color = null;
          damage--;
          this.healthAvailable++;

          if (damage == 0) {
            break;
          }
        }
      }
    }
    //damage player
    else {
      for (let i = this.hearts.length - 1; i >= 0; i--) {
        const currentHeart = this.hearts[i];

        if (currentHeart.active) {
          currentHeart.active = false;
          currentHeart.gameObj.color = { r: 190, g: 190, b: 190 };
          damage--;
          this.healthAvailable--;

          if (damage == 0) {
            break;
          }
        }
      }
    }

  }


  isPlayerAlive() {
    let isAlive = false;

    this.healthBar.forEach(heart => {
      if (heart.active == true) {
        isAlive = true;
      }
    });
    return isAlive;
  }

}

