import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = 'https://portfolio-be-francovico.herokuapp.com/personas/'

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.personaURL+'traer/perfil');
  }

  // Agregados
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.personaURL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.personaURL + `detail/${id}`);
  }

  public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.personaURL + 'create', persona);
  }

  //public update(id: number, persona: persona): Observable<any>{
  //  return this.httpClient.put<any>(this.personaURL + `editar/${id}`, persona); // VER
  //}

  public update(id: number, persona: persona): Observable<any>{
    const params = new HttpParams()
    .set('nombre',persona.nombre)
    .set('apellido',persona.apellido)
    .set('img',persona.img)

  //  console.log(params.toString()); //
  //  console.log(this.personaURL + `editar/${id}?`, params) //
    return this.httpClient.put<any>(this.personaURL + `editar/${id}?`, params); // Andando ok
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  }
}
