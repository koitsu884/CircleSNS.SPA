import { OnInit, Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerTabs') memberTabs : TabsetComponent;
  
  constructor(){}

  ngOnInit(){

  }

}
