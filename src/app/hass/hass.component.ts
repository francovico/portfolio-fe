import { Component, OnInit } from '@angular/core';
import { Hass } from '../model/hass';
import { HassservicioService } from '../service/hassservicio.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hass',
  templateUrl: './hass.component.html',
  styleUrls: ['./hass.component.css']
})
export class HassComponent implements OnInit {
  hass: Hass[] = [];
  constructor(private HassService: HassservicioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHass();

  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  cargarHass():void{
    this.HassService.lista().subscribe(data => {this.hass = data;})

  }

  delete(id?: number){
    if(id != undefined){
      this.HassService.delete(id).subscribe(
        data => {
          this.cargarHass();
        }, err => {
          alert("No se pudo borrar el Hard and soft skill");
        }
      )
    }
  }
}
