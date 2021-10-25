import "../kaboom";

export function addSpriteToScreen(spriteName, posX, posY, initialAnimation,spriteScale,isXFlipped) {
  const gameObj = add([
    sprite(spriteName, {anim: initialAnimation, flipX: isXFlipped} ),
    pos(posX, posY),
    origin("center"),
    z(1),
    scale(spriteScale),
  ]);

  return gameObj;
}

// sprite(spriteName, { anim: "idle", flipX: flipSpriteX}),
//       pos(screenPos[0], screenPos[1]),
//       origin("center"),
//       z(1),
//       scale(spriteScaling)
//{anim: initialAnimation, flipX: isXFlipped}