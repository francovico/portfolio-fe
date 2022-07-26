import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hass } from '../model/hass';

@Injectable({
  providedIn: 'root'
})
export class HassservicioService {

  hassURL = 'https://portfolio-be-francovico.herokuapp.com/hass/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hass[]>{
    return this.httpClient.get<Hass[]>(this.hassURL + 'lista');
  }

  public detail(id: number): Observable<Hass>{
    return this.httpClient.get<Hass>(this.hassURL + `detail/${id}`);
  }

  public save(hass: Hass): Observable<any>{
    return this.httpClient.post<any>(this.hassURL + 'create', hass);
  }

  public update(id: number, hass: Hass): Observable<any>{
    return this.httpClient.put<any>(this.hassURL + `update/${id}`, hass);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.hassURL + `delete/${id}`);
  }
}
