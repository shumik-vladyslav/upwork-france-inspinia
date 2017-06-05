import { Component, OnInit } from '@angular/core';
import { footable } from '../../app.helpers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router} from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

declare var jQuery: any;
declare var $: any;

class Order {
  // firabase key
  $key;

  orderId;
  clientName;
  status;
  paid;
  products;
  quantity;
  priceMethod;
  notes;
  ticketNumber;
  date;
  orderSum;
  statusClass;

  constructor() {
      this.quantity = 0;
      this.priceMethod = 'unpaid';
      this.status = 'pending';
      this.statusClass = false;
      this.notes = '';
      this.ticketNumber = '';
      this.orderSum = 0;
  };
}

@Component({
  selector: 'orders',
  templateUrl: 'orders.template.html'
})
export class OrdersComponent implements OnInit {

  createOrderModel: Order = new Order();
  editOrderModel: Order = new Order();

  totalOrders;
  searchOrder;

  orders: FirebaseListObservable<any[]>;
  clients: FirebaseListObservable<any[]>;
  productsFrbsCollection: FirebaseListObservable<any[]>;
  productsNames: any[];

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.orders = db.list('/orders');
    this.clients = db.list('/clients');
    this.productsFrbsCollection = db.list('/products');

    this.db.list('/orders').subscribe(snapshots => {

      this.totalOrders = snapshots.length;
      console.log(`orders totalOrders ${this.totalOrders}`);

    });
  }

  public ngOnInit(): void {
    footable();
  }

  onCreateDialogShow():void {
      this.productsFrbsCollection.subscribe(snapshots => {

      this.productsNames = snapshots;
      console.log(`orders totalOrders ${this.totalOrders}`);
      setTimeout(() => {
          $('#products').chosen({disable_search_threshold: 10});
          $('#products').trigger('chosen:updated');
        }
      , 100);
    });
    console.log('toggle');
  }

  onCreate(form: NgForm) {
    const order = this.createOrderModel;
    // prepare order object for saving
    order.statusClass = true;
    if ( order.status == 'pending') {
      order.statusClass = false;
    }
    order.date = Date.now();
    order.orderSum = 500;
    order.orderId = this.totalOrders;

    // order.products = [];
    // .replace("'", '')
    const temp = $('#products').val();
    order.products = temp.map(str => str.match(/'\w*'/i)[0]);

    // save to firebase
    this.orders.push(order);

    // close modal
    $('#create-form').modal('toggle');

    // reset form
    form.resetForm();
    this.createOrderModel = new Order();
  }

  onRead(id) {
    this.db.object(`orders/${id}`).subscribe(snapshots => {
      this.editOrderModel = snapshots;
      $('#products-edit').chosen({disable_search_threshold: 10});
    });
  }

  onUpdate(form: NgForm) {
    const order = this.editOrderModel;
    // prepare order object for saving
    order.statusClass = true;
    if ( order.status == 'pending') {
      order.statusClass = false;
    }

    this.orders.update(order.$key, order);

    // close modal
    $('#edit-form').modal('toggle');

    // reset form
    form.resetForm();
    this.editOrderModel = new Order();
  }
}
