import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { footable } from '../../app.helpers';
import { summernote } from '../../app.helpers';
import { slimscroll } from '../../app.helpers';
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

  id;
  name2;
  phone2;
  email2;
  status2;
  address;
  orderHistory;

  statusClass;
  clients: FirebaseListObservable<any[]>;
  client;

  constructor(public db: AngularFireDatabase, private router:Router) {

    this.clients = db.list('/clients');
  }

  public ngOnInit():any {
    footable();
    summernote();
    slimscroll();

  }

  onAddSubmit(form: NgForm){
    let statusClass;
    if(this.status == 'Enabled') {
      statusClass = true;
    } else {
      statusClass = false;
    }
    let client = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      status: this.status,
      address: "",
      orderHistory: "",
      statusClass: statusClass,
    }

    this.clients.push(client);

    //setTimeout(() => {
    //  this.router.navigate(['/chart']);
    //}, 2000);
  }

  getClient(keyClient) {
    let key = keyClient;

    this.db.list('/clients').subscribe(snapshots => {

      snapshots.forEach(snapshot => {
        let currentKey = snapshot.$key;
        console.log(currentKey,554);


        if(key == currentKey) {
          this.id = snapshot.$key;
          this.name2 = snapshot.name;
          this.phone2 = snapshot.phone;
          this.email2 = snapshot.email;
          this.status2 = snapshot.status;
          this.address = snapshot.address;
          this.orderHistory = snapshot.orderHistory;
          //console.log(this.data);
          var markupStr = ''+this.orderHistory;
          $('.summernote').summernote('code', markupStr);
          console.log(this.client.name);


        }

      });

    });

    console.log(key);
    console.log("Выбрать клиента");
  }

  onEditSubmit(){
    let statusClass;
    if(this.status2 == 'Enabled') {
      statusClass = true;
    } else {
      statusClass = false;
    }
    var markupStrIn = $('.summernote').summernote('code');
    let client = {
      name: this.name2,
      phone: this.phone2,
      email: this.email2,
      status: this.status2,
      address: this.address,
      orderHistory: markupStrIn,
      statusClass: statusClass,
    }

    //this.model.data = this.data;
    //console.log(this.model.data,44);
    console.log(markupStrIn,44);
    this.clients.update(this.id, client);
    this.router.navigate(['/clients']);
  }

}
