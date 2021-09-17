import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  page = "Signup";
  loading = false;
  firstName?: string;
  lastName?: string;
  email?: string;
  userName?: string;
  password?: string;
  confirmPassword?: string;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });

  constructor(private router: Router, private message: NzMessageService) { }

  get loginEmail(): any {
    return this.loginForm.get('email');
  }
  get loginPassword(): any {
    return this.loginForm.get('password');
  }

  get profileFirstName(): any {
    return this.profileForm.get('firstName');
  }
  get profileLastName(): any {
    return this.profileForm.get('lastName');
  }
  get profileEmail(): any {
    return this.profileForm.get('email');
  }
  get profileUserName(): any {
    return this.profileForm.get('userName');
  }
  get profilePassword(): any {
    return this.profileForm.get('password');
  }
  get profileConfirmPassword(): any {
    return this.profileForm.get('confirmPassword');
  }

  validatePassword(): boolean {
    return (this.profileForm.get('password')?.value === this.profileForm.get('confirmPassword')?.value);
  }

  actionCall(user_data: any) {
    localStorage.setItem('user_data', JSON.stringify(user_data));
    this.router.navigate(['/home']);
  }
  togglePage() {
    if (this.page === "Signup")
      this.page = "Login";
    else
      this.page = "Signup";
  }
  async login() {
    this.loading = true;
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };
    try {
      const response = await axios.post(
        `${environment.accountApi}/Account/authenticate`,
        {
          email: this.loginForm.get('email')?.value,
          password: this.loginForm.get('password')?.value
        }
        ,
        { headers }
      );
      this.loading = false;
      console.log(response.data.data);
      this.actionCall(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      this.loading = false;
      this.message.create('error', 'Can not login, please try again!');
    }
  }
  async signup() {
    this.loading = true;
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${environment.apiKEY}`
    };
    const config = {
      headers: { Authorization: `${environment.apiKEY}`, 'Access-Control-Allow-Origin': '*' }
    };
    try {
      const response = await axios.post(
        `${environment.accountApi}/Account/register`,
        {
          firstName: this.profileForm.get('firstName')?.value,
          lastName: this.profileForm.get('lastName')?.value,
          email: this.profileForm.get('email')?.value,
          userName: this.profileForm.get('userName')?.value,
          password: this.profileForm.get('password')?.value,
          confirmPassword: this.profileForm.get('confirmPassword')?.value,
        }
        ,
        config
      );
      console.log(response.data.message);
      let url = response.data.message.replace('User Registered. Please confirm your account by visiting this URL ', '');
      this.message.create('success', 'User Registered. Please confirm your account by visiting this URL');
      // this.verify(url);
      window.location.replace(url);
    } catch (error) {
      console.log(error);
      this.loading = false;
      this.message.create('error', 'There is an error, please try again.');
    }

  }

  async verify(url: string) {
    try {
      const response = await axios.get(url);
      this.loading = false;
      this.message.create('success', 'User has been verified please login');
      this.page = "Signup";
    } catch (error) {
      console.log(error);
      this.loading = false;
      this.message.create('error', 'There is an error, please try again.');
    }

  }

}
