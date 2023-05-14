import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditPerfilComponent } from './components/perfil/edit-perfil.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewhabblandasComponent } from './components/habilidades/newhabblandas.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'editacercade/:id', component: EditPerfilComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'nuevohabb', component: NewhabblandasComponent },
  { path: 'newshabb', component: NewhabblandasComponent},


  { path: 'nuevoproy', component: NewproyectoComponent },
  { path: 'editproy/:id', component: EditProyectoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
