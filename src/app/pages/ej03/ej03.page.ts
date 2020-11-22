import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-ej03',
  templateUrl: './ej03.page.html',
  styleUrls: ['./ej03.page.scss'],
})
export class Ej03Page implements OnInit {

  cars: Car[] = [];
  makes: String[] = [];
  make: string;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.cars = this.carsService.getCars();
    this.makes = this.carsService.getMakes();
    this.make = "";
  }

}
