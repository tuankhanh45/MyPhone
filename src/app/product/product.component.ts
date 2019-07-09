import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from './fakeProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }
  Buy(){
    console.log("click to buy!")
  }
  addToCart(){
    console.log("go to cart!")
  }
}
