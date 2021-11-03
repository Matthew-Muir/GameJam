import "./kaboom";

export class TurnManager{
  turnCount = 1;

  constructor(player, npc){
    this.player = player;
    this.npc = npc;

  }



//give mana, set all spells to active, turn on spell buttons
startOfPlayerTurn() {
  player.manaBar.addResource(turnCount);
  player.spellBar.setAllToActive();
}

//roll over leftover mana, turn off spell buttons
endOfPlayerTurn() {

}

//give mana
startOfNpcTurn() {
  npc.manaBar.addResource(turnCount);
}

//roll over mana
endOfNpcTurn() {

}

//end of game conditions met.
endOfGame() {
  
}





}