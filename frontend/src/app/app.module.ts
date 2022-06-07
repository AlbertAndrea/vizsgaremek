import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { IconModule } from './icon/icon.module';
import { IskolaComponent } from './page/iskola/iskola.component';
import { EloadoComponent } from './page/eloado/eloado.component';
import { ResztvevoComponent } from './page/resztvevo/resztvevo.component';
import { SzallasComponent } from './page/szallas/szallas.component';
import { SzekcioComponent } from './page/szekcio/szekcio.component';
import { EtkezesComponent } from './page/etkezes/etkezes.component';
import { DataTableModule } from './data-table/data-table.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    EloadoComponent,
    IskolaComponent,
    ResztvevoComponent,
    SzallasComponent,
    SzekcioComponent,
    EtkezesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
