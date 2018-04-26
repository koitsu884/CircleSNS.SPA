import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService,  private router: Router) { }
  userName: string;
  password: string;

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userName, this.password)
    .subscribe(data => {
      this.alertify.success('ログインしました');
    }, error => {
      console.log(error); //Debug
      this.alertify.error('ログインに失敗しました');
    }, () => {
      this.router.navigate(['/home']);
    });
    }


}
