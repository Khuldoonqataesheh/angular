import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todos:string[] = ['go to gym' , 'work until 5pm' , 'watch football matching' ]
  name:string = 'khuldoon'
  displayTodo:Boolean = false
  displayButton:boolean = true
  displayOption:number = 0
  showTodo(): void {
     this.displayTodo = true
  }
  showOptions(index:number): void {
    this.displayOption = index+1
    this.displayButton = false

 }
}
