import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { UserService } from "../shared/user.service";

@Component({
  selector: 'app-email',
  templateUrl: './login.component.html',
})
export class LoginUserComponent implements OnInit {

  state: string = '';
  error: any;
  user: any;

  users;


  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router, private userService: UserService) {
    this.user = afAuth.authState;
    this.users = db.list('/users');
  }


  onSubmit(formData) {
    if(formData.valid) {
      let name =  formData.value.name;
      let email = formData.value.email;
      let password = formData.value.password;
      this.afAuth.auth.signInWithEmailAndPassword( email , password).then(
        (success) => {
          console.log(success);
          this.user.subscribe(data => {
            if (data && data.email) {
              this.users.subscribe(snapshots => {
                let flag;

                snapshots.forEach(snapshot => {
                  if (snapshot.name === name){
                    flag = true;
                    console.log(snapshot.email, data.email, name,snapshot.name);
                    console.log("Пользователь залогинелся!");

                    let userInfo = {
                      email: snapshot.email,
                    }

                    this.userService.addUser(userInfo);
                    console.log(userInfo,44);
                    this.router.navigate(['/dashboards/main-view']);
                  } else {
                    console.log("Вы ввели неверный логин!");
                  }
                });


              });
            } else{
              console.log(2)
            }

          });

        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        });


    }
  }


  logout() {
    this.afAuth.auth.signOut();
    console.log("Пользователь вышел!")
    this.router.navigate([ '/dashboards/main-view' ]);
    Cookie.set("User", null);
  }

  ngOnInit() {
  }

}
