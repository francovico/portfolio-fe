import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about';

@Injectable({
  providedIn: 'root'
})
export class AboutservicioService {
  aboutURL = 'https://portfolio-be-francovico.herokuapp.com/about/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<About[]>{
    return this.httpClient.get<About[]>(this.aboutURL + 'lista');
  }

  public detail(id: number): Observable<About>{
    return this.httpClient.get<any>(this.aboutURL + `detail/${id}`);
  }

  public save(about: About): Observable<any>{
    return this.httpClient.post<any>(this.aboutURL + 'create', about);
  }

  public update(id: number, about: About): Observable<any>{
    return this.httpClient.put<any>(this.aboutURL + `update/${id}`, about);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.aboutURL + `delete/${id}`);
  }
}

