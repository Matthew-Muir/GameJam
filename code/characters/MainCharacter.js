import "../kaboom";

//loadSpriteAtlas("sprites/main_char2.png","code/sprite_atlases/main_char_sa.json");

//export function loadPlayer()

const player = add([
	sprite("hero", { anim: "idle" }),
	pos(95,305),
	origin("center"),
  z(1),
  scale(2),
  {
    health: 6,
    mana: 0,
  }
]);

export function loadPlayer() {
  return player;
}