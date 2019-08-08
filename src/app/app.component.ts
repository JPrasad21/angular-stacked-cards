import { Component } from '@angular/core';
import stackedCards from "./stacked-cards.js";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  viewInitiated = false;
  ngOnInit(){
  }

  ngAfterViewInit(){
    stackedCards();  
  }

}
