import "../kaboom";

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
        break;

      case spellType.HEAL:
        player.healthBar.updateHealthBar(this.damage);
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

export function getGlobalSpellBook() {

  const globalSpellBook = new Array();

  globalSpellBook.push(fireball = new Spell("fireball", 1, 1, spellType.DAMAGE, "cast a fireball at your opponent"));

  globalSpellBook.push(frost = new Spell("frost", 2, 2, spellType.DAMAGE, "freeze your opponent"));

  globalSpellBook.push(heal = new Spell("heal", 3, -3, spellType.HEAL, "Heal yourself"));

  globalSpellBook.push(lightning = new Spell("lightning", 4, 4, spellType.DAMAGE, "shock your opponent"));

  globalSpellBook.push(blindness = new Spell("blindness", 5, 5, spellType.DAMAGE, "Your opponents next attack is random"));

  globalSpellBook.push(meditate = new Spell("Pass-Turn", 0, 0, spellType.PASS, "End your turn"));

  return globalSpellBook;
}


