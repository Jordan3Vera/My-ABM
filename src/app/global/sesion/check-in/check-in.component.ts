import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit{

  constructor(private titlePage: Title){}

  ngOnInit(): void {
    this.titlePage.setTitle("Registrarse");
  }
}
