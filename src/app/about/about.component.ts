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
  persona: persona = new persona("","","");
  abo: About;

  constructor(private personaService: PersonaService, private AboutService: AboutservicioService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    const id = 1; // El Id = 1 se convierte en el perfil. En un multiusuario podria cambiarse esta variable para definir que perfil mostrar.

    this.personaService.getPersona().subscribe(data => {this.persona = data})

    //const id = this.activatedRouter.snapshot.params['id'];
    //valor = this.AboutService.detail(parseInt('id',id))

    this.AboutService.detail(1).subscribe(data => {this.abo = data;})

    //Is logged?
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    }

}

