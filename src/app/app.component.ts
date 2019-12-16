import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DbContextService } from 'src/domain/dbContext/-db-context.service';
import { User } from 'src/domain/entity/user';
import { UserServiceService } from 'src/domain/services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private _userService : UserServiceService
  ) {
    this.initializeApp();
    this.firstAcessApp()
  }

  firstAcess = true


  firstAcessApp() {

    let user = this._userService.getCurrentUser()
    .then( user => {
      console.log(user)
      if(user.name == undefined) {
        this.firstAcess = true
        this.router.navigate(['welcome'])
      }
    })
    .catch( err => {
      console.log(err)
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
