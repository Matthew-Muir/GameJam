import "../../kaboom.js";
import { resourceTypeEnum } from "../../enums.js";
import { gameObjConfigs } from "../../gameObjConfigs.js";
import { Resource } from "./Resource.js";

export class ResourceBar {

  constructor(resourceType, totalResources, width, height, cols, rows) {
    this.resourceType = resourceType;
    this.totalResources = totalResources;

    this.resourceBar = this.createResourceBar(width, height,rows, cols, gameObjConfigs[this.resourceType].startPos);
    

  }

  createResourceBar(width, height, rows, cols, startPosition) {
    const resourceArray = [];
    const spritePositions = this.spritePosGrid(startPosition, cols, rows, width, height);

    for (let k = 0; k < this.totalResources; k++) {
      const resource = new Resource(this.resourceType);
      resource['pos'] = spritePositions[k];
      resourceArray.push(resource);
    }

  }

  //helper function to get an array of sprite positions.
  // spritePositions() {
  //   const positionsArray = [];
  //   const xSpacing = gameObjConfigs[this.resourceType].dynamicData.spriteSpacing;
  //   const xStartPosition = gameObjConfigs[this.resourceType].dynamicData.startPosition[0];
  //   const yStartPosition = gameObjConfigs[this.resourceType].dynamicData.startPosition[1];

  //   for (let i = 0; i < this.totalResources; i++) {
  //     positionsArray.push({ x: xStartPosition + (i * xSpacing), y: yStartPosition });
  //   }

  //   return positionsArray;
  // }

  //returns an array of objects;
  spritePosGrid(startingXY, cols, rows, width, height) {
    const spriteCordinateArray = [];
    //xPos = ( width / cols ) / 2 + (width/cols * I );

    for (let r = 1; r <= rows; r++) {

      const yOffset = height / rows;
      const yPos = ((yOffset) / 2 + (yOffset * r)) + startingXY[1];

      let xPos = 0; // set value in next for loop

      for (let c = 1; c <= cols; c++) {

        const xOffset = width / cols;
        xPos = ((xOffset) / 2 + (xOffset * c)) + startingXY[0];

      }
      spriteCordinateArray.push({ x: xPos, y: yPos });
    }

    return spriteCordinateArray;


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