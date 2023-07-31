import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-logoup',
  templateUrl: './logoup.component.html',
  styleUrls: ['./logoup.component.scss']
})
export class LogoupComponent implements OnInit{

  constructor(private titlePage: Title){}

  ngOnInit(){
    this.titlePage.setTitle("Iniciar sesión");
  }
}
