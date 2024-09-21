import { Component } from '@angular/core';
import { ExService } from 'src/app/shared/ex.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private  service:ExService){

}

  mobile=this.service.mobiles;

}
