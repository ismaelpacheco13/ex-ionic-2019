import { Injectable } from '@angular/core';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: Car[] = [];
  makes: String[] = [];

  constructor() { 
    this.cars = [{"id":1,"make":"Oldsmobile","model":"Aurora","year":1999,"color":"Indigo"},
    {"id":2,"make":"Lincoln","model":"Continental","year":2001,"color":"Maroon"},
    {"id":3,"make":"Lotus","model":"Elise","year":2009,"color":"Purple"},
    {"id":4,"make":"Pontiac","model":"Grand Am","year":2004,"color":"Maroon"},
    {"id":5,"make":"Aston Martin","model":"Vantage","year":2011,"color":"Khaki"},
    {"id":6,"make":"Buick","model":"LeSabre","year":1992,"color":"Red"},
    {"id":7,"make":"BMW","model":"Z4","year":2004,"color":"Maroon"},
    {"id":8,"make":"Lamborghini","model":"Countach","year":1986,"color":"Maroon"},
    {"id":9,"make":"Ford","model":"Expedition","year":2007,"color":"Khaki"},
    {"id":10,"make":"Chevrolet","model":"Corvette","year":2009,"color":"Khaki"},
    {"id":11,"make":"Mitsubishi","model":"Montero","year":2003,"color":"Crimson"},
    {"id":12,"make":"Buick","model":"Regal","year":1999,"color":"Maroon"},
    {"id":13,"make":"BMW","model":"525","year":2003,"color":"Orange"},
    {"id":14,"make":"Ford","model":"Festiva","year":1992,"color":"Orange"},
    {"id":15,"make":"GMC","model":"Yukon","year":2007,"color":"Puce"},
    {"id":16,"make":"Buick","model":"LeSabre","year":1989,"color":"Yellow"},
    {"id":17,"make":"Lexus","model":"SC","year":2009,"color":"Red"},
    {"id":18,"make":"Mercedes-Benz","model":"C-Class","year":1999,"color":"Blue"},
    {"id":19,"make":"Mitsubishi","model":"Eclipse","year":2006,"color":"Blue"},
    {"id":20,"make":"Plymouth","model":"Reliant","year":1981,"color":"Mauv"},
    {"id":21,"make":"Mitsubishi","model":"Eclipse","year":1992,"color":"Turquoise"},
    {"id":22,"make":"Buick","model":"LaCrosse","year":2005,"color":"Puce"},
    {"id":23,"make":"Maybach","model":"57","year":2012,"color":"Fuscia"},
    {"id":24,"make":"Chevrolet","model":"3500","year":1998,"color":"Aquamarine"},
    {"id":25,"make":"Chevrolet","model":"Camaro","year":1981,"color":"Violet"},
    {"id":26,"make":"Chrysler","model":"LeBaron","year":1995,"color":"Maroon"},
    {"id":27,"make":"Toyota","model":"Avalon","year":2001,"color":"Fuscia"},
    {"id":28,"make":"Honda","model":"Civic","year":2007,"color":"Yellow"},
    {"id":29,"make":"Dodge","model":"Ram 3500","year":2009,"color":"Purple"},
    {"id":30,"make":"Dodge","model":"Ram Van 3500","year":1995,"color":"Puce"},
    {"id":31,"make":"Pontiac","model":"Grand Prix Turbo","year":1990,"color":"Indigo"},
    {"id":32,"make":"Chrysler","model":"Cirrus","year":1996,"color":"Violet"},
    {"id":33,"make":"Chevrolet","model":"Corvette","year":2002,"color":"Crimson"},
    {"id":34,"make":"Isuzu","model":"Trooper","year":1996,"color":"Orange"},
    {"id":35,"make":"Hyundai","model":"Santa Fe","year":2009,"color":"Purple"},
    {"id":36,"make":"Chevrolet","model":"Camaro","year":1998,"color":"Mauv"},
    {"id":37,"make":"Porsche","model":"911","year":1996,"color":"Khaki"},
    {"id":38,"make":"Pontiac","model":"Grand Am","year":1996,"color":"Red"},
    {"id":39,"make":"Porsche","model":"944","year":1983,"color":"Goldenrod"},
    {"id":40,"make":"Bentley","model":"Azure","year":2010,"color":"Puce"},
    {"id":41,"make":"Mercedes-Benz","model":"C-Class","year":2001,"color":"Goldenrod"},
    {"id":42,"make":"Ram","model":"1500","year":2012,"color":"Indigo"},
    {"id":43,"make":"Lotus","model":"Esprit","year":1998,"color":"Indigo"},
    {"id":44,"make":"Kia","model":"Sedona","year":2011,"color":"Pink"},
    {"id":45,"make":"Isuzu","model":"Ascender","year":2007,"color":"Puce"},
    {"id":46,"make":"Buick","model":"Electra","year":1988,"color":"Purple"},
    {"id":47,"make":"Infiniti","model":"M","year":2003,"color":"Blue"},
    {"id":48,"make":"Chevrolet","model":"Corvette","year":2001,"color":"Green"},
    {"id":49,"make":"Ford","model":"Aerostar","year":1988,"color":"Violet"},
    {"id":50,"make":"Cadillac","model":"Escalade","year":2000,"color":"Blue"}];
  }

  public getCars(): Car[] {
    return this.cars;
  }

  public getMakes(): String[] {
    this.makes = this.cars.map(car => car.make);
    return this.removeDuplicates(this.makes);
  }

  public removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };


}
