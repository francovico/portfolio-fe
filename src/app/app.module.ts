import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BotonAgregarComponent } from './boton-agregar/boton-agregar.component';
import { LogoComponent } from './logo/logo.component';
import { SocialComponent } from './social/social.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonAgregarComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
