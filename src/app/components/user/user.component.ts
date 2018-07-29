import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {
    this.user = {
      firstName: 'Max',
      lastName: 'Mustermann',
      age: 25,
      email: 'test@gamil.com'
    };
  }

  ngOnInit() {
  }

}
