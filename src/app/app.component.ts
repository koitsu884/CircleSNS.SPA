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
    const currentUseName = localStorage.getItem('currentUseName');
    const member: Member = JSON.parse(localStorage.getItem('currentMember'));

    if (token) {
      this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
      this.authService.currentUseName = currentUseName;
    }
    if(member){
      this.authService.currentMember = member;
    }
  }
}
