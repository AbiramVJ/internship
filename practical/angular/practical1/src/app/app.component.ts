import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public name = 'nimal';
  public age = 20;

  public sayHello():void{
    window.alert('helloworld');
  }

  public ngOnInit():void{
    window.alert('i am init')
  }
}
