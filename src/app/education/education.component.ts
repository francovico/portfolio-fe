import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { EducationservicioService } from '../service/educationservicio.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu: Education[] = [];
  constructor(private EducationService: EducationservicioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducation();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  cargarEducation():void{
    this.EducationService.lista().subscribe(data => {this.edu = data;})

  }

  delete(id?: number){
    if(id != undefined){
      this.EducationService.delete(id).subscribe(
        data => {
          this.cargarEducation();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }

}
