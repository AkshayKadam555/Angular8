import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  allowNewUser = false;
 serverName = 'TestServer'
 serverCreated = false;
 serverCreationStatus = 'no server was created!';
 
 constructor() { 
  setTimeout( () => {
    this.allowNewUser = true
  }, 2000);
}


  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created! name is' + this.serverName;
  }
}
