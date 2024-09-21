import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observablecompo',
  templateUrl: './observablecompo.component.html',
  styleUrls: ['./observablecompo.component.css']
})
export class ObservablecompoComponent {


  data :any
  error:any

nobs=new Observable((intimate)=>{

intimate.next("first");


setTimeout(()=> {

  intimate.next("Second");
  
       


           setTimeout(()=> {

            intimate.next("THIRD");
            
                    

setTimeout(()=> {

         intimate.next("FOURTH");
            
                       


   setTimeout(()=> {

       intimate.error("THIS IS TEST ERROR")
                      
                },1000);
              },1000);
            },1000);
          },1000); 




})

subref ;any;

test(){
  this.subref=this.nobs.subscribe(
    d=>{this.data=d},
    e=>{this.error=e},
    ()=>console.log("complete")
  )
}


unsub(){
  this.subref.unsubscribe()
}


}
