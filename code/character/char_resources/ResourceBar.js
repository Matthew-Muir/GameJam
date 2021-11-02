import "../../kaboom.js";
import { resourceTypeEnum } from "../../enums.js";
import { gameObjConfigs } from "../../gameObjConfigs.js";
import { Resource } from "./Resource.js";

export class ResourceBar {

  constructor(resourceType, totalResources, width, height, cols, rows) {
    this.resourceType = resourceType;
    this.totalResources = totalResources;

    this.resourceBar = this.createResourceBar(width, height, rows, cols, gameObjConfigs[this.resourceType].startPos);

  }

  createResourceBar(width, height, rows, cols, startPosition) {
    const resourceArray = [];
    const spritePositions = this.spritePosGrid(startPosition, cols, rows, width, height);

    for (let k = 0; k < this.totalResources; k++) {
      const resource = new Resource(this.resourceType);
      resource.gameObj['pos'] = spritePositions[k];
      resourceArray.push(resource);
    }
    return resourceArray;
  }

  //returns an array of objects;
  spritePosGrid(startingXY, cols, rows, width, height) {
    const spriteCordinateArray = [];
    //xPos = ( width / cols ) / 2 + (width/cols * I );
    for (let r = 1; r <= rows; r++) {

      const yOffset = height / rows;
      const yPos = ((yOffset) / 2 + (yOffset * r)) + startingXY[1];

      let xPos = 0; // set value in next for loop

      for (let c = 1; c <= cols / rows; c++) {

        const xOffset = width / cols;
        xPos = ((xOffset) / 2 + (xOffset * c)) + startingXY[0];
        spriteCordinateArray.push({ x: xPos, y: yPos });
      }
    }
    return spriteCordinateArray;
  }

  enoughResAvailable(neededAmount) {
    if (this.totalResources >= neededAmount) {
      return true;
    }
    return false;
  }

  updateStatusBar(amountOfChange) {
    //Negative dmg is equal to healing
    if (amountOfChange < 0) {

      amountOfChange = Math.abs(amountOfChange);
      for (let i = 0; i < this.resourceBar.length; i++) {

        let currentResource = this.resourceBar[i];

        if (!currentResource.active) {
          currentResource.active = true;
          currentResource.color = null;
          this.totalResources++;
          amountOfChange--;
          
          if (amountOfChange == 0) {
            break;
          }
        }
      }
    }

    else {

      for (let k = this.resourceBar.length - 1; k >= 0; k--) {

        let currentResource = this.resourceBar[k];

        if (currentResource.active) {
          currentResource.active = false;
          currentResource.gameObj.color = rgb(190, 190, 190);
          this.totalResources--;
          amountOfChange--;

          if (amountOfChange == 0) {
            break;
          }
        }
      }
    }

  }



}