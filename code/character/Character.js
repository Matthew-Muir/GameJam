import "../kaboom";
import { globalSpellBook } from "../spells/Spells.js";
import { ResourceBar } from "./char_resources/ResourceBar.js";
import { resourceTypeEnum } from "../enums.js";
import { gameObjConfigs } from "../gameObjConfigs.js";

export class Character {
  spellBook = globalSpellBook;
  healthBar = new ResourceBar(resourceTypeEnum.ENEMY_HEART,12,325,0,12,1 );
  manaBar = new ResourceBar(resourceTypeEnum.ENEMY_MANA,6,115,0,6,1);
    //this.spellBar = isPlayer ? new SpellBar(this) : null;

    gameObj = add(gameObjConfigs.enemyChar.gameObjComps);
    
  constructor(opponent) {
    this.opponent = opponent;





  }


}


