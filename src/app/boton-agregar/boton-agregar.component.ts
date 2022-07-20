import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {
@Input() text:string = "";
@Input() color:string = "";
@Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Hice click")
  }

}
