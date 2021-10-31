import "./kaboom";
import { loadSprites } from "./sprite_data/SpriteAtlasLoading.js";
import { Character } from "./character/Character.js";
import { Player } from "./character/Player.js";
import { Battlefield } from  "./Battlefield/Battlefield.js";

loadSprites();

const enemy = new Character();
const player = new Player();
const battlefield = new Battlefield();
//enemy.opponent = player;





/*
Give mana based on turn number
each time a player cast a spell. check if out of mana or cast pass-turn or if a players health is 0.
cpu takes their turn
repeat

a Spell cast needs to check...
sufficent mana
check health

*/



/*
TO DO
~ Spells need to inform player of their cost, dmg, and description.
~ Heal spells shouldn't cast if player if already full health.
~ Make AI for opponent to take their turn.
~ Replace weird hide spell button logic with simple hide attribute
add enemy name
~ 



IDEAS


*/