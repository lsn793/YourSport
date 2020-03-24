import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pictures',
    loadChildren: () => import('./quiz-4pictures/pictures.module').then(m => m.PicturesModule)
  },
  /* {
    path: '6pictures',
    loadChildren: './quiz-6pictures/pictures.module#PicturesModule',
  }, */
  {
    path: '',
    redirectTo: '/pictures',
    pathMatch: 'prefix'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
