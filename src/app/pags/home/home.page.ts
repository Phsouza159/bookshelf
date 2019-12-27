import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll , { static : false}) infiniteScroll: IonInfiniteScroll;
  @ViewChild('IonicSlides' , { static : false}) ionicSlides: any;

  titlePage
  titleList = [
    'Home',
    'Registrar Livro',
    'Biblioteca'
  ]

  dataList:any;
 
  constructor() {
   this.titlePage = this.titleList[0]
  }

  ionSlideAfterInit($event){
    this.ionicSlides.getActiveIndex()
    .then( index => {
      console.log(`index pag ${index} : ${this.titleList[index]} `)
      this.titlePage = this.titleList[index]
    })
  }
  /*
  this.dataList = [];
    
  for (let i = 0; i < 25; i++) { 
    this.dataList.push("Item number "+this.dataList.length);
  }
 
  loadData(event) {
    
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 25; i++) { 
        this.dataList.push("Item number "+this.dataList.length);
      }
      event.target.complete();
 
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
 
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  */
}
