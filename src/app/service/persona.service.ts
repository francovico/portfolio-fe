import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = 'http://localhost:8080/personas/'

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

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.personaURL + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  }
}
