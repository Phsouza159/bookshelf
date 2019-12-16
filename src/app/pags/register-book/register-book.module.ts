import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterBoockPageRoutingModule } from './register-book-routing.module';

import { RegisterBookPage } from './register-book.page';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterBoockPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterBookPage]
})
export class RegisterBoockPageModule {}
