import "../kaboom";
import { spellCastDesc } from "../UI/DisplayPlayerActionText.js";

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
        player.manaBar.updateStatusBar(this.cost);
        player.opponent.healthBar.updateStatusBar(this.damage);
        spellCastDesc(player, this.description);
        return true;

      case spellType.HEAL:
      if(player.healthBar.isResourceFull()){
        spellCastDesc(player,"Health already full");
        return false;
      }
        player.manaBar.updateStatusBar(this.cost);
        player.healthBar.updateStatusBar(this.damage);
        spellCastDesc(player, this.description);
        return true;

      case spellType.PASS:
        spellCastDesc(player, this.description);
        return true;

    }
  }
}

const spellType = {
  DAMAGE: "damage",
  HEAL: "heal",
  PASS: "pass"
};




export const globalSpellBook = new Array();

globalSpellBook.push(fireball = new Spell("Fireball", 1, 1, spellType.DAMAGE, "You cast a fireball at your opponent..."));

globalSpellBook.push(frost = new Spell("Frost", 2, 2, spellType.DAMAGE, "You Shoot a frost bolt your opponent..."));

globalSpellBook.push(heal = new Spell("Heal", 3, -3, spellType.HEAL, "You've healed yourself"));

globalSpellBook.push(lightning = new Spell("Lightning", 4, 4, spellType.DAMAGE, "Electric shock your opponent"));

globalSpellBook.push(blindness = new Spell("Blindness", 5, 5, spellType.DAMAGE, "Your opponents next attack is random"));

globalSpellBook.push(meditate = new Spell("Pass-Turn", 0, 0, spellType.PASS, "You end your turn..."));



