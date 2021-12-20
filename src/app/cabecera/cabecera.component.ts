import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  show: boolean = true;
  cursos: string[] = ['HTML', 'ANGULAR', 'JS'];
  lightStatus: string = 'RED';
  fondo: string = '';
  value: number = 2;
}
