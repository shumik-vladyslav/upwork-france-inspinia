import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
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

  id;
  name2;
  price2;
  quantity2;
  description;
  category;
  tag;

  products: FirebaseListObservable<any[]>;
  product;

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.products = db.list('/products');
  }

  public ngOnInit():any {
    footable();
  }

  onAddSubmit(form: NgForm){
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

  getProduct(keyClient) {
    let key = keyClient;

    this.db.list('/products').subscribe(snapshots => {

      snapshots.forEach(snapshot => {
        let currentKey = snapshot.$key;
        console.log(currentKey,554);


        if(key == currentKey) {
          this.id = snapshot.$key;
          this.name2 = snapshot.name;
          this.price2 = snapshot.price;
          this.quantity2 = snapshot.quantity;
          this.description = snapshot.description;
          this.category = snapshot.category;
          this.tag = snapshot.tag;
          //console.log(this.data);

          console.log(this.product.name);


        }

      });

    });

    console.log(key);
    console.log("Выбрать клиента");
  }

  onEditSubmit(){
    let product = {
      name: this.name2,
      price: this.price2,
      quantity: this.quantity2,
      description: this.description,
      category: this.category,
      tag: this.tag,
    }


    this.products.update(this.id, product);
    this.router.navigate(['/products']);
  }
}
