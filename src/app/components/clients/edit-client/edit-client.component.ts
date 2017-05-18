import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-client-component',
  templateUrl: './edit-client.component.html'
})
export class EditClientComponent implements OnInit {

  id;
  name;
  phone;
  email;
  status;

  client;

  constructor(
    public db: AngularFireDatabase,
    private router:Router,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.client = this.db.object('/clients/'+this.id);

  }

  onEditSubmit(){
    let client = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      status: this.status
    }



    this.router.navigate(['/clients']);
  }

}
