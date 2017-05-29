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

  id;
  orderId2;
  clientName2;
  status2;
  paid2;
  products;
  quantity;
  priceMethod;
  notes;
  ticketNumber;

  orders: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.orders = db.list('/orders');
  }

  public ngOnInit():any {
    footable();
  }

  onAddSubmit(){
    let statusClass;
    if(this.status2 == 'pending') {
      statusClass = false;
    } else {
      statusClass = true;
    }

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
      orderSum: '800',
      statusClass: statusClass,
    }

    this.orders.push(order);

  }

  getOrder(keyClient) {
    let key = keyClient;

    this.db.list('/orders').subscribe(snapshots => {

      snapshots.forEach(snapshot => {
        let currentKey = snapshot.$key;
        console.log(currentKey,554);


        if(key == currentKey) {
          this.id = snapshot.$key;
          this.clientName2 = snapshot.clientName;
          this.status2 = snapshot.status;
          this.paid2 = snapshot.paid;
          this.products = snapshot.products;
          this.quantity = snapshot.quantity;
          this.priceMethod = snapshot.priceMethod;
          this.notes = snapshot.notes;
          this.ticketNumber = snapshot.ticketNumber;
          //console.log(this.data);


        }

      });

    });

    console.log(key);
    console.log("Выбрать клиента");
  }


  onEditSubmit(){
    let statusClass;
    if(this.status2 == 'pending') {
      statusClass = false;
    } else {
      statusClass = true;
    }

    let order = {
      clientName: this.clientName2,
      products: this.products,
      quantity: this.quantity,
      paid: this.paid2,
      priceMethod: this.priceMethod,
      notes: this.notes,
      ticketNumber: this.ticketNumber,
      status: this.status2,
      statusClass: statusClass,
    }


    this.orders.update(this.id, order);
    this.router.navigate(['/orders']);
  }
}
