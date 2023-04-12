import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :any;

  myAppComponentData='darshil';
  // componentOneData(data:any){
  //   this.title = Object.values(data)
  //   console.log(data);
    
  // }
  mySimpleFunc(data:any){
    console.log(data)
  }
  
}
