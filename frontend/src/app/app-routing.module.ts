import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EloadoEditorComponent } from './page/eloado-editor/eloado-editor.component';
import { EloadoComponent } from './page/eloado/eloado.component';
import { HomeComponent } from './page/home/home.component';
import { IskolaEditorComponent } from './page/iskola-editor/iskola-editor.component';
import { IskolaComponent } from './page/iskola/iskola.component';
import { LoginComponent } from './page/login/login.component';
import { ResztvevoEditorComponent } from './page/resztvevo-editor/resztvevo-editor.component';
import { ResztvevoComponent } from './page/resztvevo/resztvevo.component';
import { SzallasEditorComponent } from './page/szallas-editor/szallas-editor.component';
import { SzallasComponent } from './page/szallas/szallas.component';
import { SzekcioEditorComponent } from './page/szekcio-editor/szekcio-editor.component';
import { SzekcioComponent } from './page/szekcio/szekcio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'iskola',
    component: IskolaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'iskola/edit/:id',
    component: IskolaEditorComponent,
  },
  {
    path: 'szekcio',
    component: SzekcioComponent,
  },
  {
    path: 'szekcio/edit/:id',
    component: SzekcioEditorComponent,
  },
  {
    path: 'eloado',
    component: EloadoComponent,
  },
  {
    path: 'eloado/edit/:id',
    component: EloadoEditorComponent,
  },
  {
    path: 'resztvevo',
    component: ResztvevoComponent,
  },
  {
    path: 'resztvevo/edit/:id',
    component: ResztvevoEditorComponent,
  },
  {
    path: 'szallas',
    component: SzallasComponent,
  },
  {
    path: 'szallas/edit/:id',
    component: SzallasEditorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
