import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { IUser } from 'src/app/shared/models/user.model';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-logoup',
  templateUrl: './logoup.component.html',
  styleUrls: ['./logoup.component.scss'],
  providers: [MessageService]
})
export class LogoupComponent implements OnInit{

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private titlePage: Title,
              private router: Router,
              private auth: AuthService,
              private msgSvc: MessageService)
  {}

    email: string = "";
    password: string = "";
    isLoggedIn: boolean = false;

  ngOnInit(){
    this.titlePage.setTitle("Iniciar sesión");
    this.storage.set("isLoggedIn", this.isLoggedIn);
  }

  login(){
    let login = {
      email: this.email,
      password: this.password
    }

    if(this.email != '' || this.password != ''){
      this.auth.login(login)
        .then(res => {
          if(res){
            let msg: Message = {
              severity: 'success',
              summary: `Welcome`,
              detail: 'Los datos son correctos',
              life: 3000
            };

            this.msgSvc.add(msg);

            setTimeout(() => {
              this.router.navigate(['/dashboard']);
              this.storage.set("isLoggedIn",true);
            }, msg.life);
          }else{
            this.msgSvc.add({
              severity: 'error',
              summary: 'Advertencia',
              detail: 'El correo o la contraseña son incorrectos',
              life: 3000
            });
          }
        })
        .catch(error => console.error(error))

    }else{
      this.msgSvc.add({
        severity: 'info',
        summary: 'Advertencia',
        detail: 'Por favor completar todos los campos',
        life: 3000
      });
    }
  }
}
