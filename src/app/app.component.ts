import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardd';

  sideopen:boolean=true

  toggle(){
    this.sideopen = !this.sideopen

  }
}
