import { Component, OnInit } from '@angular/core';
import { About } from '../model/about';
import { persona } from '../model/persona.model';
import { AboutservicioService } from '../service/aboutservicio.service';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");
  about: About[] = [];

  constructor(public personaService: PersonaService, private AboutService: AboutservicioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.AboutService.getAbout();
    this.personaService.getPersona().subscribe(data => {this.persona = data})

  }

  //cargarAbout():void{
  //  this.AboutService.lista().subscribe(data => {this.about = data;})
  //}

  //delete(id?: number){
  //  if(id != undefined){
  //    this.AboutService.delete(id).subscribe(
  //      data => {
  //        this.cargarAbout();
  //      }, err => {
  //        alert("No se pudo borrar el about");
  //      }
  //    )
  //  }
  //}

}
