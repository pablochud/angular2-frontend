import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list'
import { MdToolbarModule } from '@angular2-material/toolbar'

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';

import { AuthGuard } from './guards/index';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service'
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { CoursesComponent } from './components/courses.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, MdCardModule, MdButtonModule, MdIconModule, MdSidenavModule, MdListModule, MdToolbarModule],
  declarations: [ AppComponent, UserComponent, AboutComponent, HomeComponent, LoginComponent, CoursesComponent  ],
  providers:    [ AuthGuard, AuthenticationService, UserService, MdIconRegistry],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
