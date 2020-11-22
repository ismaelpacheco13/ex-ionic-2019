import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej01',
  templateUrl: './ej01.page.html',
  styleUrls: ['./ej01.page.scss'],
})
export class Ej01Page implements OnInit {

  cantidad: number;
  blancoColor: string;
  serigrafiaBordado: string;
  precioUnitario: number;
  totalTextil: number;
  precioUnitarioSerigrafia: number;
  totalSerigrafia: number;
  precioUnitarioBordado: number;
  totalBordado: number;
  poloMasLogotipo: number;
  iva: number;
  total: number;

  constructor() { }

  ngOnInit() {
    this.precioUnitario = 0;
    this.totalTextil = 0;
  }

  calcularPrecio() {
    // Se calculan los precios dependiendo de la cantidad
    if ((this.cantidad >= 20) && (this.cantidad < 40)) {
      this.precioUnitario = 4.90;
    } else if ((this.cantidad >= 40) && (this.cantidad < 100)) {
      this.precioUnitario = 3.90;
    } else if ((this.cantidad >= 100)) {
      this.precioUnitario = 3.20;
    }
    // Se le añade el 20% si es de color
    if (this.blancoColor == "color") {
      this.precioUnitario += this.precioUnitario * 0.2;
    }

    // Se calcula el precio unitario para cada serigrafía
    if ((this.cantidad < 50)) {
      this.precioUnitarioSerigrafia = 2;
    } else if (this.cantidad >= 50) {
      this.precioUnitarioSerigrafia = 1.5;
    }

    // Se calcula el precio unitario para cada bordado
    if ((this.cantidad < 50)) {
      this.precioUnitarioBordado = 3;
    } else if (this.cantidad >= 50) {
      this.precioUnitarioBordado = 2.5;
    }


    this.totalTextil = this.precioUnitario * this.cantidad;
    this.totalSerigrafia = this.precioUnitarioSerigrafia * this.cantidad;
    this.totalBordado = this.precioUnitarioBordado * this.cantidad;

    if (this.serigrafiaBordado == "bordado") {
      this.precioUnitarioSerigrafia = this.precioUnitarioBordado;
      this.totalSerigrafia = this.totalBordado;
    }

    this.poloMasLogotipo = this.totalTextil + this.totalSerigrafia;
    this.iva = this.poloMasLogotipo * 0.21;
    this.total = this.poloMasLogotipo + this.iva;

  }

  

}
