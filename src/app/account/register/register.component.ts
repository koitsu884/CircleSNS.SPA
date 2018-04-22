import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required],
      lname:['', Validators.required],
      fname:['', Validators.required],
    }, { validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup){
    return g.get('password').value == g.get('confirmPassword').value ? null : {'mismatch' : true};
  }

  register(){
    if(this.registerForm.valid){
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        console.log("Registration successfull");
      })
    }
  }
}
