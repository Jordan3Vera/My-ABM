import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes 
import { AppRoutingModule } from './app-routing.module';

//Primeng
import { PrimengModule } from './global/libraries/primeng.module';

// Components 
import { AppComponent } from './app.component';
import { LogoupComponent } from './global/sesion/logoup/logoup.component';
import { CheckInComponent } from './global/sesion/check-in/check-in.component';
import { DashboardComponent } from './global/dashboard/dashboard.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { NavbarComponent } from './global/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoupComponent,
    CheckInComponent,
    DashboardComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
