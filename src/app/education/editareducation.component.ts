import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../model/education';
import { EducationservicioService } from '../service/educationservicio.service';

@Component({
  selector: 'app-editareducation',
  templateUrl: './editareducation.component.html',
  styleUrls: ['./editareducation.component.css']
})
export class EditareducationComponent implements OnInit {
  edu : Education = null;

  constructor(private sEducation: EducationservicioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducation.detail(id).subscribe(
      data => {
        this.edu = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducation.update(id, this.edu).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
}
