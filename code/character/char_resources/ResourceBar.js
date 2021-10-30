import "../../kaboom.js";
import { resourceTypeEnum } from "../../enums.js";
import { gameObjConfigs} from "../../gameObjConfigs.js";
import { Resource } from "./Resource.js";

export class ResourceBar {

  constructor(player, resourceType, totalResources){
    this.player = player;
    this.resourceType = resourceTypeEnum[resourceType];
    this.totalResources = totalResources;

  }

  createResourceBar() {
    const resourceArray = [];
    const spritePositions = this.spritePositions();
    for(let k = 0; k < this.totalResources;)
    const resource = new Resource(this.resourceType);
  }

  //helper function to get an array of sprite positions.
  spritePositions() {
    const positionsArray = [];
    const xSpacing = gameObjConfigs[this.resourceType].dynamicData.spriteSpacing;
    const xStartPosition = gameObjConfigs[this.resourceType].dynamicData.startPosition[0];
    const yStartPosition = gameObjConfigs[this.resourceType].dynamicData.startPosition[1];

    for(let i = 0; i < this.totalResources; i++) {
      positionsArray.push({x: xStartPosition + (i * xSpacing), y: yStartPosition});
    }

    return positionsArray;
  }


    createHealthBar(player) {
    const healthBar = [];
    const spaceBetweenSprites = 25;

    for (let i = 0; i < player.health; i++) {
      healthBar[i] = new Heart(player.isPlayer, i * spaceBetweenSprites);
    }

    return healthBar;
  }


}