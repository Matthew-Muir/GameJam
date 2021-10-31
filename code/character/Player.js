import "../kaboom";
import { getGlobalSpellBook } from "../spells/Spells.js";
import { SpellBar } from "../spells/SpellBar.js";
import { ResourceBar } from "./char_resources/ResourceBar.js";
import { resourceTypeEnum } from "../enums.js";
import { gameObjConfigs } from "../gameObjConfigs.js";

export class Player {
  spellBook = getGlobalSpellBook();
  healthBar = new ResourceBar(resourceTypeEnum.PLAYER_HEART, 12, 325, 0, 12, 1);
  manaBar = new ResourceBar(resourceTypeEnum.PLAYER_MANA, 6, 115, 0, 6, 1);
    //this.spellBar = isPlayer ? new SpellBar(this) : null;

  gameObj = add(gameObjConfigs.playerChar.gameObjComps);

  constructor(opponent) {
    this.opponent = opponent;
  }


}


