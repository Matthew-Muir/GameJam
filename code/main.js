import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./character/Character.js";

loadSprites();

//const enemy = new Character("enemy", [540, 85], 2, false, true);
const player = new Character("hero", [95, 305], 2, true, false);
//enemy.opponent = player;


const testTest = add([
  text("1 Fireball 1", {size:20}),
  origin("center"),
  pos(width()/2, height()/2)
]);




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
~ REFACTOR CODE!!!



IDEAS
combine heart and mana into single Resource obj.
Combine Health and Mana bars into single Resource bars
Combine an objects GameObj data into an obj that's easier to pass. Use Add() to create the empty obj. Then loop through each item in obj adding to instantiated game obj.

A sprite obj that contains all the sprite Data settings for builind their obj.
*/