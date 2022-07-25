import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SocialComponent } from './social/social.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HassComponent } from './hass/hass.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevaExperienciaComponent } from './experience/nueva-experiencia.component';
import { EditarexperienciaComponent } from './experience/editarexperiencia.component';
import { NuevohassComponent } from './hass/nuevohass.component';
import { EditarhassComponent } from './hass/editarhass.component';
import { EditaraboutComponent } from './about/editarabout.component';
import { EditareducationComponent } from './education/editareducation.component';
import { NuevaeducationComponent } from './education/nuevaeducation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HassComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarexperienciaComponent,
    NuevohassComponent,
    EditarhassComponent,
    EditaraboutComponent,
    EditareducationComponent,
    NuevaeducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
