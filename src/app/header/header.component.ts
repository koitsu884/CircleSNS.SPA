import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private authService:AuthService,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userName, this.password)
    .subscribe(data => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error('failed to login');
    }, () => {
      //console.log(['/members']);
    });
    }

    logout() {
      this.authService.userToken = null;
      this.authService.currentUser = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      this.alertify.message('Logged out');
      this.router.navigate(['/home']);
    }

    loggedIn() {
      return this.authService.loggedIn();
    }
}
