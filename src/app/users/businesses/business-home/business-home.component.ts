import { Component, OnInit } from '@angular/core';
import { BusinessUser } from '../../../_models/BusinessUser';
import { AuthService } from '../../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-home',
  templateUrl: './business-home.component.html',
  styleUrls: ['./business-home.component.css']
})
export class BusinessHomeComponent implements OnInit {
  bisUser: BusinessUser;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.bisUser = data['bisuser'];
      console.log(this.bisUser);
    })
  }

}
