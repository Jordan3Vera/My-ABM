import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.scss']
})
export class NavbarDashboardComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router){}

  items: MenuItem[] | undefined;
  profile: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      }
    ];

    this.profile = [
      {
        label: 'Perfil',
        icon: 'pi pi-fw pi-user'
      },
      {
        label: 'Salir',
        icon: 'pi pi-fw pi-power-off',
        command: () => { this.logout()}
      }
    ];
  }

  logout(){
    this.authSvc.logout()
      .then(() => {
        this.router.navigate(['/login'])
      })
      .catch((error: any) => console.error(error))
  }
}
