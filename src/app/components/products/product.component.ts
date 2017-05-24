import { Component, OnInit } from '@angular/core';
import { footable } from '../../app.helpers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router} from '@angular/router';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'products',
  templateUrl: 'products.template.html'
})
export class ProductsComponent implements OnInit {

  name;
  price;
  quantity;

  products: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.products = db.list('/products');
  }

  public ngOnInit():any {
    footable();
  }

  onAddSubmit(){
    let product = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      description: "",
      category: "",
      tag: "",
    }

    this.products.push(product);

  }
}
