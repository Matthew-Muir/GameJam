import "../kaboom";
import {spellCastDesc} from "../UI/DisplayPlayerActionText.js";

class Spell {

  constructor(name, cost, damage, spellType, description) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.damage = damage;
    this.spellType = spellType;

  }
  spellCast(player) {

    switch (this.spellType) {
      case spellType.DAMAGE:
        player.opponent.healthBar.updateHealthBar(this.damage);
        spellCastDesc(player, this);
        break;

      case spellType.HEAL:
        player.healthBar.updateHealthBar(this.damage);
        spellCastDesc(player, this);
        break;

      case spellType.PASS:
        break;
    }
  }
}

const spellType = {
  DAMAGE: "damage",
  HEAL: "heal",
  PASS: "pass"
};




  export const globalSpellBook = new Array();

  globalSpellBook.push(fireball = new Spell("Fireball", 1, 1, spellType.DAMAGE, "cast a fireball at your opponent"));

  globalSpellBook.push(frost = new Spell("Frost", 2, 2, spellType.DAMAGE, "freeze your opponent"));

  globalSpellBook.push(heal = new Spell("Heal", 3, -3, spellType.HEAL, "Heal yourself"));

  globalSpellBook.push(lightning = new Spell("Lightning", 4, 4, spellType.DAMAGE, "shock your opponent"));

  globalSpellBook.push(blindness = new Spell("Blindness", 5, 5, spellType.DAMAGE, "Your opponents next attack is random"));

  globalSpellBook.push(meditate = new Spell("Pass-Turn", 0, 0, spellType.PASS, "End your turn"));



