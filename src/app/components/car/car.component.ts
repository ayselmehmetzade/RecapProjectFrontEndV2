import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: ICar[] = [];
  brandOptions: any[] = [];
  colorOptions: any[] = [];
  test: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    
    this.carService.getAll().subscribe(response => {

      this.cars = response.data;
      this.brandOptions = [...new Set(this.cars.map(b => b.brandText))].map(x => {
        return { label: x, value: x }}).sort((a, b) => (a.label > b.label ? 1 : -1));

      // console.log(this.cars.map(c => c.colorText));
      
      // console.log([...new Set(this.cars.map(c => c.colorText))]);
      //console.log("deneme");
      this.colorOptions = [...new Set(this.cars.map(c => c.colorText))].map(x => {
        return { label: x, name: x }}).sort((a, b) => (a.label > b.label ? 1 : -1));

    }
    
    );

 
    
  }

  filter(e){
    console.log(e);
    
  }
}