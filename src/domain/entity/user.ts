import { EntityCommon } from './entity.common';

export class User extends EntityCommon {
    
    constructor() {
        super()
        this.__type = '_user'
    }

    name : string
}