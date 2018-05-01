import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Member } from '../../_models/Member';
import { AuthService } from '../../_services/auth.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { jaLocale } from 'ngx-bootstrap/locale';
import { Hometown } from '../../_models/Hometown';
import { City } from '../../_models/City';
defineLocale('ja', jaLocale); 

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})

export class RegisterMemberComponent implements OnInit {
  passwordMinLength = 6;
  passwordMaxLength = 20;
  registerForm: FormGroup;
  member: Member;
  bsConfig: Partial<BsDatepickerConfig>;
  cities: City[];
  //selectedCityId : number;
  hometowns: Hometown[];

  constructor(
              private authService: AuthService,
              private alertify: AlertifyService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private localeService: BsLocaleService) { }

  ngOnInit() {
    this.bsConfig = {
      dateInputFormat: "YYYY年MM月DD日"
    };
    this.createRegistarForm();
    this.localeService.use('ja');
    // this.cities = this.globalService.getCities();
    // console.log(this.cities);
    // this.hometowns = this.globalService.getHometowns();

    this.cities = this.route.snapshot.data['cities'];
    this.hometowns = this.route.snapshot.data['hometowns'];
  }

  createRegistarForm() {
    this.registerForm = this.fb.group({
      gender:['unknown'],
      username:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      displayName:[''],
      dateOfBirth: [null],
      cityid: [null],
      hometownid: [null],
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
    
    // if(this.registerForm.valid){
    //   this.member = Object.assign({}, this.registerForm.value);
    //   console.log(this.member);
    //   this.authService.registerMember(this.member).subscribe(() => {
    //     this.alertify.success('アカウントが作成されました');
    //   }, error => {
    //     this.alertify.error(error);
    //   }, () => {
    //     this.authService.login(this.member.username, this.registerForm.value.password).subscribe(() => {
    //       this.router.navigate(['/home']);
    //     })
    //   })
    // }
  }
}
