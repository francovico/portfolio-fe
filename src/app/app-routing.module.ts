import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditaraboutComponent } from './about/editarabout.component';
import { EditareducationComponent } from './education/editareducation.component';
import { NuevaeducationComponent } from './education/nuevaeducation.component';
import { EditarexperienciaComponent } from './experience/editarexperiencia.component';
import { NuevaExperienciaComponent } from './experience/nueva-experiencia.component';
import { EditarhassComponent } from './hass/editarhass.component';
import { NuevohassComponent } from './hass/nuevohass.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'about', component: AboutComponent},
  {path:'editarabout/:id', component: EditaraboutComponent},
  {path:'nuevaexperiencia', component: NuevaExperienciaComponent},
  {path:'editarexperiencia/:id', component: EditarexperienciaComponent},
  {path:'nuevohass', component: NuevohassComponent},
  {path:'editarhass/:id', component: EditarhassComponent},
  {path:'nuevaeducation', component: NuevaeducationComponent},
  {path:'editareducation/:id', component: EditareducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

