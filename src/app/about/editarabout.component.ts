import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from '../model/about';
import { persona } from '../model/persona.model';
import { AboutservicioService } from '../service/aboutservicio.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-editarabout',
  templateUrl: './editarabout.component.html',
  styleUrls: ['./editarabout.component.css']
})
export class EditaraboutComponent implements OnInit {
  about : About = null;
  persona : persona = null;

  constructor(private About: AboutservicioService, private personaService: PersonaService,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

    this.About.detail(1).subscribe(
      data => {
        this.about = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

    this.About.update(id, this.about).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
