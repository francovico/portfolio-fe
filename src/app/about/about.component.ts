import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  //persona: persona = new persona("","","");
  persona: persona = null;
  abo: About = null;

  constructor(private personaService: PersonaService, private AboutService: AboutservicioService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAbout();
  }

    cargarAbout(): void{
      this.personaService.getPersona().subscribe(data => {this.persona = data}) // Trae el perfil principal.
      this.AboutService.detail(1).subscribe(data => {this.abo = data;}) // Carga los datos del About.

    //Is logged?
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    }

}

