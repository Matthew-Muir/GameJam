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


//player.healthBar.resourceBar.forEach(element => debug.log(`${element.gameObj.pos.x} ${element.gameObj.pos.y}`));


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