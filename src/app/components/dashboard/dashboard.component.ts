import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen= "https://img.icons8.com/clouds/2x/apple-weather.png";

  constructor() { }

  ngOnInit(): void {
  }

}
