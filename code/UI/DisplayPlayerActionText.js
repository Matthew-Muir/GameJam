import "../kaboom";

export function spellCastDesc(player, num) {

  
  player.spellBar.spells.forEach(sb => {sb.gameObj.area = num; sb.gameObj.z = num;});

  const textTest = add([
    pos(300 , 400),
    text("You cast a fireball ball at your opponent...", {
        size: 20,
        width: 320,
    }),
    origin("center")
]);
}