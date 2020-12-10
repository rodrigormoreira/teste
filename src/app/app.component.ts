import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homePage: boolean = false;

  Login(){
    this.homePage = !this.homePage;
  }
}
