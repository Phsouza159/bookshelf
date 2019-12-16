import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EntityCommon } from '../entity/entity.common';

import { v1 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbContextService< Tentity extends EntityCommon >  {

  constructor(private storage: Storage) {
  }


  async getByKey<Tentity extends EntityCommon > ( key : string) : Promise<Tentity> {

   return this.storage.get(key);
  }

  async getAll<Tentity extends EntityCommon >(type:string , insertItem) : Promise<Tentity[] | void> {

    let entityList = [ ]
    let count = await this.storage.length()

    return await this.storage.forEach( ( value , key , item) => {

      if(value != undefined && (<EntityCommon>value).__type == type)
        entityList.push(value)

      if(item == count)
      {
       return insertItem(entityList)
      }
    })
  }

  async insert<Tentity extends EntityCommon >( entity : Tentity) : Promise<boolean> {

    let key = uuid()
    entity.id = key
    return this.save(key , entity)    
  }

  async update<Tentity extends EntityCommon >(entity : Tentity) : Promise<boolean> {
    return this.save(entity.id , entity)
  }

  async delete<Tentity extends EntityCommon >(entity : Tentity) : Promise<boolean> {
    let result = this.storage.remove(entity.id)

    return result != null
  }

  private async save<Tentity extends EntityCommon >( key : string , entity : Tentity ) : Promise<boolean> {
    try{
      this.storage.set(key , entity);

      return Promise.resolve(true)
    }catch(err) {
      return Promise.reject(false)
    }
  }
}
