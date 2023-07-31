import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogoupComponent } from './global/sesion/logoup/logoup.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { CheckInComponent } from './global/sesion/check-in/check-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LogoupComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
