import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { ExperienciaservicioService } from '../service/experienciaservicio.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreexperiencia: string = '';
  descripcionexperiencia: string = '';

  constructor(private ExperienciaService: ExperienciaservicioService, private router: Router) { }

  ngOnInit(): void { }
  onCreate(): void {
    const expe = new Experiencia(this.nombreexperiencia, this.descripcionexperiencia);
    this.ExperienciaService.save(expe).subscribe(
      data=>{
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err =>{
        alert("Algo falló");
        this.router.navigate(['']);
      }
    )
  }
  }

