import "../../kaboom.js";
import { gameObjConfigs } from "../../gameObjConfigs.js";

/*
  We create a base resource. The initial resource will be missing certain game comps that must
  be determined during creation. e.g.pos() text()
  Those additional comps will be assigned in the resource bar.
*/

export class Resource {
  active = true;
  
  constructor(resourceType){
    this.gameObj = add(gameObjConfigs[resourceType].gameObjComps);
  }
}


