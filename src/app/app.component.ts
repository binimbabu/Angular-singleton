import { Component } from '@angular/core';
import { Singleton } from './singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data : string = '';
  sendData(){
    Singleton.getInstance().setData(this.data);
  }
}
