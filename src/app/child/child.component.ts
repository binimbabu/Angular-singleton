import { Component } from '@angular/core';
import { Singleton } from '../singleton';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
value: string = '';
  constructor() { }

getInstnaceData(){
  this.value = Singleton.getInstance().getData();
}

}
