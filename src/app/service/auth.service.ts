import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwtdto } from '../model/jwtdto';
import { Loginusuario } from '../model/loginusuario';
import { Nuevousuario } from '../model/nuevousuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://portfolio-be-francovico.herokuapp.com/auth/'
  constructor(private httpClient: HttpClient) { }

public nuevo(nuevoUsuario: Nuevousuario): Observable<any>{
  return this.httpClient.post<any>(this.authURL+'nuevo', nuevoUsuario);
}
public login(loginUsuario: Loginusuario): Observable<Jwtdto>{
  return this.httpClient.post<Jwtdto>(this.authURL+'login', loginUsuario);
}
}
