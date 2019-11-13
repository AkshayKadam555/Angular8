import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string};

 users = [
  {
    id: 1,
    name: 'ak'
  },
  {
    id: 2,
    name: 'akshay'
  },
  {
    id: 3,
    name: 'kadam'
  }
]; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
  }

}
