import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() 

  btnclick = new EventEmitter()

  menuclick(){
    this.btnclick.emit()

  }

}

