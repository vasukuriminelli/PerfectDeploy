import { Component } from '@angular/core';

@Component({
  selector: 'app-excompo',
  templateUrl: './excompo.component.html',
  styleUrls: ['./excompo.component.css']
})
export class ExcompoComponent {

  data="THIS IS TEMPLATE REFERNCE VARIBLE FROM  APP -EXCOMPO";

 

  demo (){
    return 'THIS FUNCTION FROM EX COMPO EXAMPLE RELATED TO THE TEMPLATE REFERNCE METHODE';
  }

   
  data1="EXAMPLE FOR @VIEWCHILD DECORATOR";

  passtoParent(){
    return this.data1;
  }
  
}
