import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../_models/AppUser';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userName: string;
  appUser: AppUser;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.appUser = this.authService.appUser;
    this.userName = this.authService.decodedToken.name;
  }

  submit(){
    console.log(this.appUser);
  }
}
