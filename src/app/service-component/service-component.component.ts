import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.scss'],
  providers: [UserService]
})
export class ServiceComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
