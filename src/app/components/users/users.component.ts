import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../../models/user/user';
import {UsersService} from '../../services/data/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
      firstName: '',
      lastName: '',
      age: null,
      email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  currentClasses: object = {};
  currentStyles: object = {};
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UsersService) {
      this.setCurrentClasses();
      this.setCurrentStyles();
  }

  ngOnInit() {
    console.log('init...');

    this.userService.getData().subscribe(data => {
        console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
    });
  }

  setCurrentClasses() {
      this.currentClasses = {
          'btn-success': this.enableAdd,
          'big-text': this.showExtended,
      };
  }

  setCurrentStyles() {
      this.currentStyles = {
          'padding-top': this.showExtended ? '0' : '40px',
          'font-size': this.showExtended ? '' : '32px'
      };
  }

  toggleHide(user: User) {
       user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
      if (!valid) {
          console.log('Form is invalid');
      } else {
          value.isActive = true;
          value.registered = new Date();
          value.hide = true;
          value.image = 'https://picsum.photos/600/600/?random';

          this.userService.addUser(value);

          this.form.reset();
      }
  }

}
