import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() icon:string=''
  @Input() bg:string=''
  @Input() count:string=''
  @Input() discription:string=''

}
