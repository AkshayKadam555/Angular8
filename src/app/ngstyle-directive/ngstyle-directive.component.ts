import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.scss']
})
export class NgstyleDirectiveComponent implements OnInit {
serverId: number = 10;
serverStatus: string = 'online';
  constructor() { 
   
  }

  ngOnInit() {
  }

  getServerStaus()
  {
    return this.serverStatus;
  }

  getColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
