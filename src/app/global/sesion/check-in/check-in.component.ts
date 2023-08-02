import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';
import { AddUser } from 'src/app/shared/models/user.model';
import { map } from 'rxjs';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EncrDecrService } from 'src/app/shared/hashed/encr-decr.service';
import { keySecret } from 'src/app/shared/constants/keySecret.const';
import { MessageService, Message } from 'primeng/api';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
  providers: [MessageService]
})
export class CheckInComponent implements OnInit{

  constructor(private titlePage: Title,
              private msgSvc: MessageService,
              private auth: AuthService,
              private router: Router,
              private hashed: EncrDecrService,
              private fb: FormBuilder,
              private http: HttpClient)
  {}

  ngOnInit(): void {
    this.titlePage.setTitle("Registrarse");
  }

  registerForm: any = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required ),
    password: new FormControl('', Validators.required),
    confirmPass: new FormControl('', Validators.required)
  });

  register(){
    let addUser: any = {
      // username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      // confirmPass: this.registerForm.value.confirmPass
    }

    //Para mostrar los datos
    console.log(addUser)

    if(addUser.password !== this.registerForm.value.confirmPass){
      this.msgSvc.add({
        severity: 'info',
        summary: 'Advertencia',
        detail: 'Las contraseñas son diferentes',
        life: 3000
      });
    }else{
      this.auth.registerUser(addUser)
        .then(res => {
          console.log(res);

          let msg: Message = {
              severity: 'success',
              summary: `Welcome`,
              detail: 'Gracias por haberte registrado',
              life: 2000
            };
  
            this.msgSvc.add(msg);

            setTimeout(() => {
              if(res){
                this.router.navigate(['/login']);
              }
            }, msg.life);
          }
        ).catch(error => console.log(error));
    }
  }
}
