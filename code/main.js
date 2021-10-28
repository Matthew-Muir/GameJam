import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./character/Character.js";

loadSprites();

const enemy = new Character("enemy", [540, 85], 2, false, true);
const player = new Character("hero", [95, 305], 2, true, false, enemy);
enemy.opponent = player;


/*
each time a player cast a spell. check if out of mana or cast pass-turn.
cpu takes their turn
player gets mana refresh
repeat

a Spell cast need to check...
sufficent mana
check health


*/


//Left off working on mana and how it should be better implemented to make adding subtracting and updating GUI more streamlined.