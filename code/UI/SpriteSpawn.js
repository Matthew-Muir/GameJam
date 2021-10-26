import "../kaboom";

export function addSpriteToScreen(spriteName, posX, posY, initialAnimation, spriteScale, isXFlipped) {
  const gameObj = add([
    sprite(spriteName, { anim: initialAnimation, flipX: isXFlipped }),
    pos(posX, posY),
    origin("center"),
    z(1),
    scale(spriteScale),
  ]);

  return gameObj;
}
