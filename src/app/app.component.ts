import { Component, ViewChild, ViewChildren } from '@angular/core';
import { FakeserviceService } from './shared/fakeservice.service';
import { ExcompoComponent } from './excompo/excompo.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  

  title = 'vasu';
 
  hello={
    "name":"vasu",
    "age":19
  }

 value="ENTER A VALUE"

 imagedetails={
  link:"https://cdn.pixabay.com/photo/2017/08/14/21/22/nature-2642042_640.jpg",
  height:100,
  width:100
 }


onsubmit(){
  console.log(" SUBMITTED");
  alert("hello");
}

inputvalue="vasu"



Submit()
{
  console.log("value is",this.inputvalue)
}





onkeyup(event:any)
{
  alert("key up event"+event)
}

onkeydown(event:any)
{
  alert("keydwon event")
}

placeholdervalue="TERNARYCONDITION"


color :any =true;


stylesprops={
  'background-color':'yellow',
  'text-decoration':'line-through',
  'font-size':'40px'
}



arrobj=[1,2,3,4,5,6,7]


objarray=[

          {
            name:'vasu',
            place:'vizinagaram',
            age:23
          },
    {
      name:"balu",
      place:'vizag',
      age:24
    }


]


checknumber = 10;

checkname="vasu"

specialcase=" "


classbinding= 'error'  

checkvalue="vasu"

styles={
  'padding':'60px',
  'background-color':'yellow',
  'margin':'60px'
  
}


// SHAING DATA // GOES TO APP.COMPONENT .HTML

TITLE='HELLO HOW ARE YOU';

TITLE1="HELLLLLLLLLLLO";

Otherdata;

checkdata(){
  console.log('got data',this.Otherdata)
}


//SERVICES RELATED CONCEPT

constructor(public servicefile:FakeserviceService){

}

submitted()
{
  this.servicefile.dummyobj="HELLO VASU GOODMORINING"
}




pipes_name="hello vasu"


listData=[

        {
          name:'vasu',
          age:'19'
        },
                {
                  name:'balu',
                  age:'20'
                }

]

todaysDate=new Date()

pipesvarible="pipes  related Data"

variblename="vasu"
variblegender="male"


//@ viewChild conecpt-----------------g

@ViewChild (ExcompoComponent ) child
  

submit ( )
{
  alert(this.child.passtoParent()); // this is for function calling 
  alert(this.child.data); // this is for varible calling 
}


//HERE WE USE THE @Viewchild  for same component to acess the same element 

@ViewChild("ref") r
changeing()
{

   console.log(this.r.nativeElement.style.background="blue");

   this.r.nativeElement.innerText="i just changed";
   
}


// MAIN DIFFERNCE BETWEEN @ViewChild and @ViewChildren is  for suppose one template refernce varible contain  elemtn then u take the @viewhcild .
//@ViewChildren is used at the time of one template refernce varible refers the mulitple elements then u used @ViewChild decorator 
@ViewChild ("para") p;
@ViewChildren("heading") h

test1()
{

 /*
  for(let el of this.p)
    {                                              // if you try to iterate then u will get the error

      console.log(this.p.nativeElement.innerText);
    }
      
*/
  console.log(this.p.nativeElement.innerText);

  console.log(this.h);

  for(let el of this.h)
    {
      console.log(el.nativeElement.innerText);
    }

    
}






}

