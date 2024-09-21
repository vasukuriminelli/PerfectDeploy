import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datashare1',
  templateUrl: './datashare1.component.html',
  styleUrls: ['./datashare1.component.css']
})
export class Datashare1Component {
  @Input() inputdata1:any;

 
  ngOnInit(): void{
    console.log('child data', this.inputdata1)
  }


}
