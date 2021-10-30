export const gameObjConfigs = {
  playerChar: {
    gameObjArr: [
      sprite("hero", { anim: "idle" }),
      pos(95, 305),
      origin("center"),
      z(1),
      scale(2),
    ],
  }
  ,

  enemyChar: [
    sprite("enemy", { anim: "idle", flipX: true }),
    pos(540, 85),
    origin("center"),
    z(1),
    scale(2),
  ],

  heart: {
    gameObjComps: [
      sprite("heart"),
      pos(), //define in ResourceBar
      origin("center"),
      z(1),
      scale(1.25)
    ],
    dynamicData: {
      spriteSpacing: 10,
      startPositon: [340,340]
    }
  },

  mana: [
    sprite("mana_crystal"),
    pos(), //define in ResourceBar
    origin("center"),
    z(1),
    scale(.65)
  ],

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

  spellBar: [
    sprite("spell_box"),
    pos(320, 415),
    origin("center"),
    z(1),
    scale({ x: 4, y: 2.5 })
  ]

};