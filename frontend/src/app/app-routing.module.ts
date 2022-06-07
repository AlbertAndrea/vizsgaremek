import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EloadoComponent } from './page/eloado/eloado.component';
import { EtkezesComponent } from './page/etkezes/etkezes.component';
import { HomeComponent } from './page/home/home.component';
import { IskolaComponent } from './page/iskola/iskola.component';
import { ResztvevoComponent } from './page/resztvevo/resztvevo.component';
import { SzallasComponent } from './page/szallas/szallas.component';
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
    path: 'szekcio',
    component: SzekcioComponent,
  },
  {
    path: 'eloado',
    component: EloadoComponent,
  },
  {
    path: 'resztvevo',
    component: ResztvevoComponent,
  },
  {
    path: 'szallas',
    component: SzallasComponent,
  },
  {
    path: 'etkezes',
    component: EtkezesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
