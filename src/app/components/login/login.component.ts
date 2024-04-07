import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { Domains } from '../../models/Domains';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup | null = null
  constructor(private usersSvc: UsersService) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('^[^\\s]+$')])
    })
  }
  userData: User = {
    id: 0, userName: '', password: '',
    domain: Domains.Graphics
  }
  passwordError() {
    if (!this.form!.get(Object.keys(this.form!.controls)[1])!.valid) {
      alert('password have to include 8 chars and not include white spaces')
    }
  }
  loginClick() {
    let currentUser: User = {
      id: 0,
      userName: '',
      password: '',
      domain: Domains.Graphics
    }
    if (this.form?.valid) {
      this.usersSvc.getUser(this.userData).subscribe((res: any) => {
        if (res)
          currentUser = res;
        if (currentUser.id != 0) {
          alert(`Wellcome ${this.userData.userName}!!`)
          localStorage.setItem('current-user', JSON.stringify(currentUser))
          localStorage.setItem('numOfSends', JSON.stringify(0));
          localStorage.setItem('myJobs', JSON.stringify([]));

          location.href = '/jobs'
        }
        else {
          alert('This user is not exist, Try Again')
        }
      });
    }
    else {
      alert('not valid. Try again')
      this.userData.password = ''
      this.userData.userName = ''
    }
  }
}
