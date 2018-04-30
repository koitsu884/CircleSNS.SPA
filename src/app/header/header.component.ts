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
  constructor(private authService:AuthService,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.userToken = null;
    this.authService.currentUseName = null;
    this.authService.currentMember = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUseName');
    localStorage.removeItem('currentMember');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  currentMemberName(){
    return this.authService.currentMember.displayName;
  }
}
