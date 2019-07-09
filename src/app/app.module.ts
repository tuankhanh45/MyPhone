import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { BuyCartComponent } from './buy_cart/buy_cart.component';
import { MenuNavComponent } from './menu_nav/menu_nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    BuyCartComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
