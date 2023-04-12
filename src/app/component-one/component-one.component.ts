import { Component , ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {

  @Output()myFirstOutput=new EventEmitter<any>()

  // @ViewChild('myTxt') myTxt : ElementRef | undefined
  // @Output() myEmitOne = new EventEmitter<any>()
  ngOnInit(){

  }
  
// @Output()name=new EventEmitter<any>()
  // onFormSubmit(data:string){
  //   console.log(data);
  //   this.name.emit(data)
  // }

  // function(data:any){

  //   this.myEmitOne.emit(data)
  // }
  myFunc(data:any){
    console.log(data);
    this.myFirstOutput.emit
  }
}
