import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GadjetComponent } from './gadjet/gadjet.component';

const routes: Routes = [
  { path: 'gadjet', component: GadjetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
