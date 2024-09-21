import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datashare',
  templateUrl: './datashare.component.html',
  styleUrls: ['./datashare.component.css']
})
export class DatashareComponent {
  //HERE WE WRITE THE INPUT TAG BCZ THE DATA COMESFROM PARENTCOMPONENT(APP.COMPONENT) GENERALLY WE WRITE THE TAGE WHERE THE DATACOMES FROM
  // IN THIS CASE PARENT TO CHILD SO @INPUT TAG CAN BE DECLEARED HERE IN THIS CHILD CLASS
  @Input()  inputdata:any;

  constructor(){ }

  ngOnInit(): void{
    console.log('child data', this.inputdata)
  }



}
