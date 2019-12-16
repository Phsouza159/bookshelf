import { Injectable } from '@angular/core';
import { DbContextService } from "./../dbContext/-db-context.service";
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private _dbx : DbContextService<User>) { }


  async getCurrentUser() : Promise<User> {
    let user = new User() ;
    let users = []
    
    await this._dbx.getAll(user.__type , (e) => {
      user = e[0]
    })

    return user;
  }

  async setCurrentUser( name : string) : Promise<boolean> {
      let user = new User()
      user.name = name

      if( await this.getCurrentUser() != null){

        return this._dbx.insert(user)
      }

      throw new Error('There is already a current user');
  }
}
