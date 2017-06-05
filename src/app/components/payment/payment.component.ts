import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { UserService } from '../shared/user.service';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'payment',
  templateUrl: 'payment.template.html',
  styleUrls: ['./payments.component.css']
})

export class PaymentComponent implements OnInit {
  options = ['Cash', 'Credit card', 'Check', 'Tickets'];
  optionsMap = [];
  firebaseUserKey;
  user: FirebaseObjectObservable<any>;

  ngOnInit(): void {
      this.firebaseUserKey =  JSON.parse(Cookie.getAll()['User']).firebaseKey;
      console.log(`user from cookies: ${JSON.stringify(this.firebaseUserKey)}`);

      // initialize checkboxes array
      for (let x = 0; x < this.options.length; x++) {
        this.optionsMap[this.options[x]] = false;
      }

      this.db.object(`users/${this.firebaseUserKey}`).subscribe(
        user => {
          if (!user.priceMethod) {return; }
          user.priceMethod.forEach(element => {
            this.optionsMap[element] = true;
          });
        },
        error => console.log(`error: ${error.message}`)
      );
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    ) {


    }

  onSubmit() {
    // todo submit changes
    const keys = Object.keys(this.optionsMap )

    var filtered = keys.filter((key) => this.optionsMap[key]);
    console.log(keys);
    this.db.list('users').update(this.firebaseUserKey, { priceMethod: keys.filter((key) => this.optionsMap[key]) });
  }

  updateCheckedOptions(option, event) {
   this.optionsMap[option] = event.target.checked;
   console.log(this.optionsMap);
  }
}
