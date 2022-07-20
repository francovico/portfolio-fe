import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaservicioService } from '../service/experienciaservicio.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];
  constructor(private ExperienciaService: ExperienciaservicioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  cargarExperiencia():void{
    this.ExperienciaService.lista().subscribe(data => {this.expe = data;})

  }

  delete(id?: number){
    if(id != undefined){
      this.ExperienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}