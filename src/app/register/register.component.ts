import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordMinLength = 6;
  passwordMaxLength = 20;
  registerForm: FormGroup;
  user: any;

  constructor(
              private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router,
              private fb: FormBuilder) { }
  ngOnInit(){
    this.createRegistarForm();
  }

  createRegistarForm() {
    this.registerForm = this.fb.group({
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      displayName:[''],
      userType : ['Member'],
      password: ['',
                 [Validators.required, Validators.minLength(this.passwordMinLength), Validators.maxLength(this.passwordMaxLength)]
                ],
      confirmPassword: ['', Validators.required]         
    }, {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(g: FormGroup){
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true};
  }

  register() {
    //console.log(this.registerForm.value);
    
    if(this.registerForm.valid){
      this.user = Object.assign({}, this.registerForm.value);
      console.log(this.user);
      this.authService.registerUser(this.user).subscribe(() => {
        this.alertify.success('アカウントが作成されました');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.user.username, this.registerForm.value.password).subscribe(() => {
          this.router.navigate(['/home']);
        })
      })
    }
  }

}
