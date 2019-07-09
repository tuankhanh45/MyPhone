import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './fakeProduct';
import { Data } from './getDatahttp'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = PRODUCTS;
  users: any;
  constructor(private data: Data) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
    this.users = data
      console.log(this.users)
    })
  }
  Buy(index:number,quantily:number) {
    this.data.Buy(index,quantily)
  }
  addToCart() {
    console.log("go to cart!")
  }
}
