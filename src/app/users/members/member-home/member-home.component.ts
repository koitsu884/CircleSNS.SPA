import { Component, OnInit } from '@angular/core';
import { Member } from '../../../_models/Member';
import { AuthService } from '../../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {
  member: Member;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.member = data['member'];
    })
    //this.member = this.authService.currentMember;
  }
}
