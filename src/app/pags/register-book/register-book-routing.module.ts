import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterBookPage } from './register-book.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterBoockPageRoutingModule {}
