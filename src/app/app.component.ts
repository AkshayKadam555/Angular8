import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8';

constructor(private router: Router) {}

public name = "Akshay";
public message = "";

  onLoadServers()
  {
      this.router.navigate(['/server']);
  }

/*   onClick()
  {
    console.log("ak");
  } */
}
