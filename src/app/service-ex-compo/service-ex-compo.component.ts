import { Component } from '@angular/core';
import { FakeserviceService } from '../shared/fakeservice.service';

@Component({
  selector: 'app-service-ex-compo',
  templateUrl: './service-ex-compo.component.html',
  styleUrls: ['./service-ex-compo.component.css']
})
export class ServiceExCompoComponent {

  constructor(public servicfile:FakeserviceService){

  }

  ngOnInt(){
   
  }

  DisplaycheckData(){

    console.log('Service data:',this.servicfile.dummyobj)

  }
}
