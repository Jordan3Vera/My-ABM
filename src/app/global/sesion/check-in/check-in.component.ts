import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AddUser } from 'src/app/shared/models/user.model';
import { map } from 'rxjs';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EncrDecrService } from 'src/app/shared/hashed/encr-decr.service';
import { keySecret } from 'src/app/shared/constants/keySecret.const';


// Generando token fake 
function generateRandomToken(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit{

  constructor(private titlePage: Title,
              private auth: AuthService,
              private router: Router,
              private hashed: EncrDecrService,
              private fb: FormBuilder)
  {}

  ngOnInit(): void {
    this.titlePage.setTitle("Registrarse");
  }

  registerForm: any = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPass: new FormControl('', Validators.required)
  });

  register(){
    let addUser: any = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmPass: this.registerForm.value.confirmPass
    }

    console.log(addUser)
  }


  example: any = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  press(){
    let res: any = {
      username: this.example.value.name
    }

    console.log(res)
  }
}
