import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent {

  @Output() childData = new EventEmitter<any>()

  ngOnInt(): void{

  }

  SubmitData(){
    this.childData.emit( 'VasuData')
  }
  
}
