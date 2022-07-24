import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hass } from '../model/hass';
import { HassservicioService } from '../service/hassservicio.service';

@Component({
  selector: 'app-nuevohass',
  templateUrl: './nuevohass.component.html',
  styleUrls: ['./nuevohass.component.css']
})
export class NuevohassComponent implements OnInit {
  nombrehass: string = '';
  puntuacionhass: string = '';

  constructor(private HassService: HassservicioService, private router: Router) { }

  ngOnInit(): void { }
  onCreate(): void {
    const hass = new Hass(this.nombrehass, this.puntuacionhass);
    this.HassService.save(hass).subscribe(
      data=>{
        alert("Hard and soft skill agregado");
        this.router.navigate(['']);
      }, err =>{
        alert("Algo falló");
        this.router.navigate(['']);
      }
    )
  }

}
