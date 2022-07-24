import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from '../model/about';
import { AboutservicioService } from '../service/aboutservicio.service';

@Component({
  selector: 'app-editarabout',
  templateUrl: './editarabout.component.html',
  styleUrls: ['./editarabout.component.css']
})
export class EditaraboutComponent implements OnInit {
  about : About = null;

  constructor(private About: AboutservicioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.About.detail(id).subscribe(
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
