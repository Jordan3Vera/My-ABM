import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoupComponent } from './global/sesion/logoup/logoup.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { CheckInComponent } from './global/sesion/check-in/check-in.component';
import { DashboardComponent } from './global/dashboard/dashboard.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  { path: 'login', component: LogoupComponent },
  { path: 'register', component: CheckInComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    ...canActivate(() => redirectUnauthorizedTo(['/login'])) 
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
