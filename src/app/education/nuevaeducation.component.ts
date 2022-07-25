import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../model/education';
import { EducationservicioService } from '../service/educationservicio.service';

@Component({
  selector: 'app-nuevaeducation',
  templateUrl: './nuevaeducation.component.html',
  styleUrls: ['./nuevaeducation.component.css']
})
export class NuevaeducationComponent implements OnInit {
  institucion: string = '';
  intervalo: string = '';
  descripcion: string = '';

  constructor(private EducationService: EducationservicioService, private router: Router) { }

  ngOnInit(): void { }
  onCreate(): void {
    const edu = new Education(this.institucion, this.intervalo, this.descripcion);
    this.EducationService.save(edu).subscribe(
      data=>{
        alert("Educación agregada");
        this.router.navigate(['']);
      }, err =>{
        alert("Algo falló");
        this.router.navigate(['']);
      }
    )
  }
}
