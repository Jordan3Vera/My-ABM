import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

// Routes 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Primeng
import { PrimengModule } from './global/libraries/primeng.module';

// Components 
import { AppComponent } from './app.component';
import { LogoupComponent } from './global/sesion/logoup/logoup.component';
import { CheckInComponent } from './global/sesion/check-in/check-in.component';
import { DashboardComponent } from './global/dashboard/dashboard.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { NavbarComponent } from './global/layout/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavbarDashboardComponent } from './global/dashboard/navbar-dashboard/navbar-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoupComponent,
    CheckInComponent,
    DashboardComponent,
    NotFoundComponent,
    NavbarComponent,
    NavbarDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
