import { Component, OnInit } from '@angular/core';
import { footable } from '../../app.helpers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router} from '@angular/router';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'orders',
  templateUrl: 'orders.template.html'
})
export class OrdersComponent implements OnInit {

  orderId;
  clientName;
  status;
  paid;

  orders: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.orders = db.list('/orders');
  }

  public ngOnInit():any {
    footable();
  }

  onAddSubmit(){
    let order = {
      orderId: this.orderId,
      clientName: this.clientName,
      status: this.status,
      paid: this.paid,
      products: "",
      quantity: "",
      priceMethod: "",
      notes: "",
      ticketNumber: "",
      date: "2016, 12, 30",
      orderSum: '800'
    }

    this.orders.push(order);

  }
}
