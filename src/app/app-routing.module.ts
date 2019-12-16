import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pags/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'welcome',
    loadChildren: () => import('./pags/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'registerBook',
    loadChildren: () => import('./pags/register-book/register-book.module').then( m => m.RegisterBoockPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./pags/library/library.module').then( m => m.LibraryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
