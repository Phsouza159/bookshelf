import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertService } from 'src/domain/services/alert.service';
import { DbContextService } from 'src/domain/dbContext/-db-context.service';
import { User } from 'src/domain/entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private alertService: AlertService
    , private _dbx: DbContextService<User>
    , private router: Router
  ) { }

  formSingin = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit() {
  }

  submitUser() {

    if (this.formSingin.value == "") {
      return
    }

    this.alertService.confirm('Confimer', `O seu nome é ${this.formSingin.value.name}?`, () => { }, () => {

      let user = new User()
      user.name = this.formSingin.value.name
      console.log(user)

      this._dbx.insert(user)
        .then(e => {
          if (e) {
            console.log('successfully registered user')
            this.router.navigate(['home'])
          }
        })
        .catch(err => console.error(err))

    })
  }
}
