import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  
  
constructor(private ts:TodoService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  

todos;

ngOnInt(): void{
  this.todos=this.ts.todoList

}


}
