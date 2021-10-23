import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { Character } from "./characters/Character.js";

loadSprites();


const player = new Character("hero", [95, 305], 2, null, true);
const enemy = new Character("enemy", [540,85],2,"Vhaus", false);
//const test = new HealthBar(350,310, player.gameObj);


enemy.gameObj.flipX(true);
//enemy.flipX(true);
//add player selection box
add([
  sprite("selection_box"),
  pos(320, 415),
  scale(4, 2.5),
  origin("center"),
  z(1)
]);
//add mana mana_crystal


add([
  text(enemy.gameObj.name, { size: 22 }),
  pos(22, 8)
]);

//Basic button to select attack
const btn = add([
  text("Attack", { size: 25 }),
  pos(80, 380),
  area(),
  z(1),
  scale(1)
]);

btn.clicks(() => debug.log(time()));
btn.clicks(() => eh06.opacity = 0);
btn.hovers(() => btn.scaleTo(1.02), () => btn.scaleTo(1));








