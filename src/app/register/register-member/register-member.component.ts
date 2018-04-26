import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Member } from '../../_models/Member';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  registerForm: FormGroup;
  member: Member;

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createRegistarForm();
  }

  createRegistarForm() {
    this.registerForm = this.fb.group({
      gender:['male'],
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      displayName:['', Validators.required],
      dataOfBirth: [null],
      city: ['', Validators.required],
      hometown: [''],
      introduction: [''],
      interests: [''],
      password: ['',
                 [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
                ],
      confirmPassword: ['', Validators.required]         
    }, {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(g: FormGroup){
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true};
  }

  register() {
    if(this.registerForm.valid){
      this.member = Object.assign({}, this.registerForm.value);
      this.authService.registerMember(this.member).subscribe(() => {
        this.alertify.success('アカウントが作成されました');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.member.username, this.registerForm.value.password).subscribe(() => {
          this.router.navigate(['/home']);
        })
      })
    }
  }
}
