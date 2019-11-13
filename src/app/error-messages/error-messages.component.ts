import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {
servers = [];
  constructor() { }

  ngOnInit() {
  }

  onAddServer()
  {
   this.servers.push('Another Server');
  }

  onRemoveServer(id: number){
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
