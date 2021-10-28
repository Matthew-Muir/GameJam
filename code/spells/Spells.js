import "../kaboom";

class Spell {

  constructor(name, cost, description, damage) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.damage = damage;
  }

    spellCast(player) {
      player.opponent.healthBar.takeDamage(this.damage);
    
  }
}



export function getGlobalSpellBook() {

  const globalSpellBook = new Array();

  globalSpellBook.push(fireball = new Spell("fireball", 1, "cast a fireball at your opponent", 1));

  globalSpellBook.push(frost = new Spell("frost", 2, "freeze your opponent", 2));

  globalSpellBook.push(heal = new Spell("heal", 3, "Heal yourself", 3));

  globalSpellBook.push(lightning = new Spell("lightning", 4, "shock your opponent", 4));

  globalSpellBook.push(blindness = new Spell("blindness", 5, "Your opponents next attack is random", 5));

  globalSpellBook.push(meditate = new Spell("Pass-Turn", 0, "End your turn", 0));

  return globalSpellBook;
}


