import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './app/product/product.component';
import {LoginComponent} from './app/login/login.component';
;
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }