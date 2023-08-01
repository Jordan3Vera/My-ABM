import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { IUser } from 'src/app/shared/models/user.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-logoup',
  templateUrl: './logoup.component.html',
  styleUrls: ['./logoup.component.scss']
})
export class LogoupComponent implements OnInit{

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private titlePage: Title,
              private router: Router,
              private auth: AuthService)
  {}

    email: string = "";
    password: string = "";
    isLoggedIn: boolean = false;

  ngOnInit(){
    this.titlePage.setTitle("Iniciar sesión");
    this.storage.set("isLoggedIn", this.isLoggedIn);
  }


  submit(){
    this.isLoggedIn = false;

    if(this.email != '' || this.password != ''){
      this.auth.getUsers().subscribe({
        next: (data) => {
          const res = data.users.find((item: any) => this.email === item.email && this.password === item.password);
          //  console.log(res.user)
          if(res){
            Swal.fire({
              icon: 'success',
              text: `Welcome ${res.user}!`,
              showConfirmButton: false,
              timer: 1500
            }).then((result: any) => {
              if(result){
                this.storage.set("isLoggedIn",true);
                this.storage.set("User",res.user);
                this.router.navigate(['/dashboard']);
              }
            });
          }else{
            Swal.fire({
              icon: 'info',
              text: 'El correo o contraseña son incorrectos',
              showConfirmButton: false,
              timer: 1500
            });
          }
        },
        error: (err: any) => {
          throw new Error("Error" + err);
        }
      });
    }else{
      Swal.fire({
        icon: 'info',
        title: 'Advertencia',
        text: "Por favor completar todos los campos",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
