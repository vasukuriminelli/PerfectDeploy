import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData():string{
    return 'HELLO FROM DATASERVICE FILE THIS FILE CONNECTED TO DI COMPONENT FILE'
  }

  
}
