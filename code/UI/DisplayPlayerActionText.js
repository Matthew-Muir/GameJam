import "../kaboom";

export function spellCastDesc(player, spell) {

  //hide buttons
  player.spellBar.changeVisibility();

  //output spell description
  const battleText = add([
    pos(30, 400),
    text(spell.description, {
      size: 20,
      width: 600,
    }),
    origin("left"),
    z(1),
  ]);

  //Spell description displays for 2.5 secs before spellbuttons reappear.
  wait(2.1, () => {
    player.spellBar.changeVisibility();
    destroy(battleText);
  });
}