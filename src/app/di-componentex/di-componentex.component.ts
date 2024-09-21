import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-di-componentex',
  templateUrl: './di-componentex.component.html',
  styleUrls: ['./di-componentex.component.css']
})
export class DiComponentexComponent implements OnInit {
  message :string;

  constructor(private dataservic:DataService)
  {

  }

  ngOnInit():void{
    this.message=this.dataservic.getData();
  }

}
