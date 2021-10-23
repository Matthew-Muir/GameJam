import "../kaboom";

export function addCharacter(spriteName, screenPos, spriteScaling, characterName = "undefined") {
   const character = add([
      sprite(spriteName, { anim: "idle" }),
      pos(screenPos[0], screenPos[1]),
      origin("center"),
      z(1),
      scale(spriteScaling),
      {
        health: 6,
        mana: 0,
        name: characterName
      }
    ]);

    return character;
  }

