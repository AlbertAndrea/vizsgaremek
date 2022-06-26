import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DataTableModule } from './data-table/data-table.module';
import { IskolaEditorComponent } from './page/iskola-editor/iskola-editor.component';
import { ResztvevoEditorComponent } from './page/resztvevo-editor/resztvevo-editor.component';
import { EloadoEditorComponent } from './page/eloado-editor/eloado-editor.component';
import { SzekcioEditorComponent } from './page/szekcio-editor/szekcio-editor.component';
import { SzallasEditorComponent } from './page/szallas-editor/szallas-editor.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor } from './service/jwt.interceptor';
import { AuthService } from './service/auth.service';
import { UserComponent } from './page/user/user.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';

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
    IskolaEditorComponent,
    ResztvevoEditorComponent,
    EloadoEditorComponent,
    SzekcioEditorComponent,
    SzallasEditorComponent,
    LoginComponent,
    UserComponent,
    UserEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconModule,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      deps: [
        AuthService,
      ],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
