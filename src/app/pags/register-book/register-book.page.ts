import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { liberaryGenere } from 'src/domain/objectValues/literary.genre';
import * as automapper from 'automapper-js'
import { Book } from 'src/domain/entity/book';
import { DbContextService } from 'src/domain/dbContext/-db-context.service';


@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.page.html',
  styleUrls: ['./register-book.page.scss'],
})
export class RegisterBookPage implements OnInit {

  constructor(private _dbx : DbContextService<Book> ) { }

  ngOnInit() {
  }

  selectLiberaryGanere = liberaryGenere

  formBook = new FormGroup({
    titulo : new FormControl(''),
    autor : new FormControl(''),
    categoria : new FormControl(''),
    dataAquisicao : new FormControl(''),
    dataInicioLeitura : new FormControl(''),
    dataTerminoLeitura : new FormControl(''),
    numeroPaginas : new FormControl(0),
    valor : new FormControl(0),
    resumo : new FormControl(''),
    imagem : new FormControl(''),
  })

  submitBook() {
    console.log(this.formBook.value)
    let bookEntity = automapper( Book , this.formBook.value)

    bookEntity.dataInclusao = new Date()

    console.log(bookEntity)

    this._dbx.insert(bookEntity)
      .then(e => {
        console.log(e)
      })
      .catch(er => {
        console.warn(er)
      })

  }

}
