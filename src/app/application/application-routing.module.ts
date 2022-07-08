import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MEComponent } from './me/me.component';

const routes: Routes = [
  {path:"me", component:MEComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
