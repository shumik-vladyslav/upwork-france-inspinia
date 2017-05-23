import { Component, OnInit, Input } from '@angular/core';
import { summernote } from '../../../app.helpers';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

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
  address;
  orderHistory;

  clients;
  client;

  data: string = 'appendix';

  model: any = {
    data: this.data,
  }

  @Input() height: number;
  @Input() minHeight: number;
  @Input() maxHeight: number;
  @Input() placeholder: string;
  @Input() focus: boolean;
  @Input() airMode: boolean;
  @Input() dialogsInBody: string;
  @Input() editable: boolean;
  @Input() disableResizeEditor: string;
  @Input() serverImgUp: boolean;
  @Input() config: any;

  /** URL for upload server images */
  @Input() hostUpload: string;

  /** Uploaded images server folder */
  @Input() uploadFolder: string = "";

  constructor(
    public db: AngularFireDatabase,
    private router:Router,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clients = this.db.list('/clients');
    this.client = this.db.object('/clients/'+this.id).subscribe(client => {

      this.name = client.name;
      this.phone = client.phone;
      this.email = client.email;
      this.status = client.status;
      this.address = client.address;
      this.orderHistory = client.orderHistory;
    });

    summernote();

  }

  onSubmit() {
    this.model.data = this.data;
  }

  onEditSubmit(){
    let client = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      status: this.status,
      address: this.address,
      orderHistory: this.orderHistory,
    }


    this.clients.update(this.id, client);
    this.router.navigate(['/clients']);
  }

}
