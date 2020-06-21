import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home-routing.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'app/home',
    pathMatch: 'full'
  },
  ...HomeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
