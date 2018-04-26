import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../../_models/Member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: Member[];
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.users = data['users'].result;
    })
  }

}
