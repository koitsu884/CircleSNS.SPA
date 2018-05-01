import { Component, OnInit } from '@angular/core';
import { Member } from '../../../_models/Member';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';
import { MemberService } from '../../../_services/member.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  member: Member;
  constructor(private route: ActivatedRoute,
            private alertify: AlertifyService,
            private memberService: MemberService,
            private authService: AuthService) { }

  ngOnInit() {
  }

  updateMember(){
    
  }
}
