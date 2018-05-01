import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Member } from './_models/Member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private jwtHelperService: JwtHelperService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const displayName = localStorage.getItem('displayName');
    const userType = localStorage.getItem('userType');

    if (token) {
      this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
      this.authService.userToken = token;
      this.authService.userId = this.authService.decodedToken.nameid;
      this.authService.displayName = displayName;
      this.authService.userType = userType;
    }
  }
}
