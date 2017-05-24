import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  user = {};

  constructor() {

  }

  addUser(userInfo) {
    this.user = {
      email: userInfo.email
    }
  }
  getUser() {
    return this.user;
  }

}
