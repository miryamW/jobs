import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Domains } from '../../models/Domains';
import { User } from '../../models/User';
UsersService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user = {
    id: 0,
    userName: 'no user',
    password: '',
    domain: Domains.Graphics
  }

  constructor(protected userSvc:UsersService) {
    if (localStorage.getItem('current-user'))
      this.user = JSON.parse(localStorage.getItem('current-user')!);
      userSvc.numOfSends = parseInt(localStorage.getItem('numOfSends')!);
  }

}
