import { Component, OnInit } from '@angular/core';
import { footable } from '../../app.helpers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router} from '@angular/router';

declare var jQuery:any;
declare var $: any;

@Component({
  selector: 'clients',
  templateUrl: 'clients.template.html'
})
export class ClientsComponent {

  name;
  phone;
  email;
  status;

  clients: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.clients = db.list('/clients');
  }

  public ngOnInit():any {
    footable();
  }

  onAddSubmit(){
    let client = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      status: this.status,
      address: "",
      orderHistory: "",
    }

    this.clients.push(client);

    //setTimeout(() => {
    //  this.router.navigate(['/chart']);
    //}, 2000);
  }
}
