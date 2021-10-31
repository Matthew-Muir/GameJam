export const gameObjConfigs = {

  playerChar: {
    gameObjComps: [
      sprite("hero", { anim: "idle" }),
      pos(95, 310),
      origin("center"),
      z(1),
      scale(2),
    ],
  }
  ,

  enemyChar: {
    gameObjComps: [
      sprite("enemy", { anim: "idle", flipX: true }),
      pos(540, 85),
      origin("center"),
      z(1),
      scale(2),
    ],
  },
  //This object is a resource and must be an object. One to add its basic comps. The other is a seed for creating a ResourceBar obj.
  playerHeart: {
    gameObjComps: [
      sprite("heart"),
      pos(), //define in ResourceBar
      origin("center"),
      z(1),
      scale(1.25)
    ],
    startPos: [270, 350],
  },

  playerMana: {
    gameObjComps:
      [
        sprite("mana_crystal"),
        pos(), //define in ResourceBar
        origin("center"),
        z(1),
        scale(.65)
      ],
    startPos: [155, 350]
  },

  enemyHeart: {
    gameObjComps: [
      sprite("heart"),
      pos(), //define in ResourceBar
      origin("center"),
      z(1),
      scale(1.25)
    ],
    startPos: [10, 50],
  },

  enemyMana: {
    gameObjComps:
      [
        sprite("mana_crystal"),
        pos(), //define in ResourceBar
        origin("center"),
        z(1),
        scale(.65)
      ],
    startPos: [20, 20]
  },

  spellButton: [
    text(), //define in Spellbutton
    pos(),//define in spellbutton
    area(),
    z(1),
    scale(1),
    origin("center"),
    "spellButton",
    color(),
  ],

  spellBar: {
    gameObjComps: [
      sprite("spell_box"),
      pos(320, 420),
      origin("center"),
      z(0),
      scale({ x: 4, y: 2.5 })
    ],
  },

  enemyStatBar: {
    gameObjComps: [
      sprite("enemyBar"),
      pos(200, 35),
      origin("center"),
      z(0),
      scale({ x: 5, y: 4 })
    ],
  }

};