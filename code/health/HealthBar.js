import "../kaboom";
import { addSpriteToScreen } from "../UI/SpriteSpawn.js";
import { Heart } from "./Heart.js";
/*
A health bar is an class object that contains the players hearts objects in an array. It also contains any functions to update and make alteration to the health bar.
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

  takeDamage(damage) {
    for (let i = this.hearts.length -1; i >= 0; i--) {
      const currentHeart = this.hearts[i];
      if (currentHeart.active) {
        currentHeart.active = false;
        currentHeart.gameObj.color = { r: 190, g: 190, b: 190 };
        this.healthAvailable--;
        damage--;
      }
      if (damage == 0) {
        break;
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

