import "./kaboom";
import { loadSprites } from "./sprite_atlas_jsons/SpriteAtlasLoading.js";
import { addCharacter } from "./characters/Character.js"

loadSprites();


const player = addCharacter("hero", [95, 305], 2);
const enemy = addCharacter("enemy", [540,85],2,"Vhaus");


function createHeartSprite(posX, posY) {
  const heart = add([
    sprite("heart"),
    pos(posX, posY),
    scale(1),
    origin("center"),
    z(1),
    scale(1.5),
  ]);
}

function playerHealthBar(posX, posY, player) {
  const healthBar = [];
  for (let i = 0; i < player.health; i++) {
    healthBar[i] = createHeartSprite(posX + (i * 30), posY);
  }
}
playerHealthBar(460, 310, player);

// const enemy = add([
//   sprite("enemy", { anim: "idle" }),
//   pos(540, 85),
//   z(1),
//   scale(2),
//   origin("center"),
//   {
//     name: "Vhaus"
//   }
// ]);

enemy.flipX(true);
//add player selection box
add([
  sprite("selection_box"),
  pos(320, 415),
  scale(4, 2.5),
  origin("center"),
  z(1)
]);
//add mana mana_crystal
const pmc01 = add([
  sprite("mana_crystal"),
  pos(285, 340),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const pmc02 = add([
  sprite("mana_crystal"),
  pos(310, 340),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const pmc03 = add([
  sprite("mana_crystal"),
  pos(335, 340),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const pmc04 = add([
  sprite("mana_crystal"),
  pos(360, 340),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const pmc05 = add([
  sprite("mana_crystal"),
  pos(385, 340),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const pmc06 = add([
  sprite("mana_crystal"),
  pos(410, 340),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);

const emc01 = add([
  sprite("mana_crystal"),
  pos(133, 53),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const emc02 = add([
  sprite("mana_crystal"),
  pos(163, 53),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const emc03 = add([
  sprite("mana_crystal"),
  pos(193, 53),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const emc04 = add([
  sprite("mana_crystal"),
  pos(223, 53),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const emc05 = add([
  sprite("mana_crystal"),
  pos(253, 53),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);
const emc06 = add([
  sprite("mana_crystal"),
  pos(283, 53),
  scale(1),
  origin("center"),
  z(1),
  scale(.8),
]);

const eh01 = add([
  sprite("heart"),
  pos(135, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);

const eh02 = add([
  sprite("heart"),
  pos(165, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);

const eh03 = add([
  sprite("heart"),
  pos(195, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);

const eh04 = add([
  sprite("heart"),
  pos(225, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);

const eh05 = add([
  sprite("heart"),
  pos(255, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
]);

const eh06 = add([
  sprite("heart"),
  pos(285, 20),
  scale(1),
  origin("center"),
  z(1),
  scale(1.5),
  opacity(1),
]);

add([
  text(enemy.name, { size: 22 }),
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







