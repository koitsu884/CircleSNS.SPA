import { Component, OnInit } from '@angular/core';
import { Member } from '../../_models/Member';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {
  member: Member;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.member = this.authService.currentMember;
  }
}
