import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import {Observable, of} from 'rxjs/index';


@Injectable()
export class UsersService {
  users: User[];
  data: Observable<any>;

  constructor() {
      this.users = [
          {
              firstName: 'Max',
              lastName: 'Mustermann',
              age: 25,
              email: 'max.mustermann@gmail.com',
              image: 'https://picsum.photos/600/600/?image=883',
              isActive: true,
              registered: new Date('01/02/2018 08:30:29'),
              hide: true
          },
          {
              firstName: 'John',
              lastName: 'Doe',
              age: 30,
              email: 'john.doe@gmail.com',
              image: 'https://picsum.photos/600/600/?image=1005',
              isActive: false,
              registered: new Date('03/11/2017 08:30:29'),
              hide: true
          },
          {
              firstName: 'Karen',
              lastName: 'Williams',
              age: 26,
              email: 'karen@hotmail.com',
              image: 'https://picsum.photos/600/600/?image=996',
              isActive: true,
              registered: new Date('06/09/2016 08:30:29'),
              hide: true
          },
      ];
  }

  getData() {
      this.data = new Observable(observer => {
         setTimeout(() => { observer.next(1); }, 1000);
         setTimeout(() => { observer.next(2); }, 2000);
         setTimeout(() => { observer.next(3); }, 3000);
         setTimeout(() => { observer.next(4); }, 4000);
      });

      return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
