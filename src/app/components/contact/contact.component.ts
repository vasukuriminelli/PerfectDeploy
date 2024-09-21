import { Component } from '@angular/core';
import { ExService } from 'src/app/shared/ex.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public service:ExService) //HERE WE INJECTED THE SERVICE FILES
  {

  }



  addMobile()
  {

    this.service.mobiles.push('vivo');

  }

}
