import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getcompoex',
  templateUrl: './getcompoex.component.html',
  styleUrls: ['./getcompoex.component.css']
})
export class GetcompoexComponent {

  constructor(private http:HttpClient)
  {

  }


  getData()
  {
    this.http.get( 'https://fakestoreapi.com/products?limit=5')

    .subscribe((data)=>{

      console.log(data);

      this.data=data
    })

  }


data=null;





}




