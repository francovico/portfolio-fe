import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginusuario } from '../model/loginusuario';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: Loginusuario;
  nombreUsuario!: string;
  password!:string;
  roles!:string[];
  errorMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new Loginusuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err=> {
    this.isLogged = false;
    this.isLogginFail = true;
    this.errorMsj = err.error.mensaje;
    console.log(this.errorMsj);
  })
}
}
