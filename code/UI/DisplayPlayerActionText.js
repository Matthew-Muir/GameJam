import "../kaboom";

export function spellCastDesc(player, spell) {

  //hide buttons
  const test = player.spellBar.spells[0].gameObj.area;
  player.spellBar.spells.forEach(sb => { sb.gameObj.area = 0; sb.gameObj.z = 0; });

  //output spell description
  const battleText = add([
    pos(28, 390),
    text(spell.description, {
      size: 20,
      width: 600,
    }),
    origin("left"),
    z(1),
  ]);

  //Spell description displays for 2.5 secs before spellbuttons reappear.
  wait(2.5, () => {
    player.spellBar.spells.forEach(sb => { sb.gameObj.area = test; sb.gameObj.z = 1; });
    destroy(battleText);
  });
}