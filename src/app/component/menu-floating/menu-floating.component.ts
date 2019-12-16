import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-floating',
  styleUrls: ['./menu-floating.component.scss'],
  template : `
  <ion-fab horizontal="end" vertical="bottom" slot="fixed" style="margin: 15px">
        <ion-fab-button color="light">
          <ion-icon name="arrow-dropleft"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="start">
          <ion-fab-button color="light" [routerLink]="['/library']">
            <ion-icon name="book" ></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="light" [routerLink]="['/registerBook']" >
            <ion-icon name="add-circle-outline"></ion-icon>
          </ion-fab-button>
          <ion-fab-button color="light" [routerLink]="['/home']" >
            <ion-icon name="home"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
  `
})
export class MenuFloatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
