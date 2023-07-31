import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    //Todos los ZIndex se incrementan según sus grupos en armonía unos con otros.
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, //dropdown, overlaypanel
      menu: 1000, //overlay menus
      tooltip: 1000 //tooltip
    }
  }

}
