import { Component, OnInit } from '@angular/core';
import { TourService } from '../APIservices/tour.service';
import { CityService } from '../APIservices/city.service';
import { City } from '../models/city.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [NgFor],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any[] = [];

  constructor(
    private tourService: TourService,
    private cityService: CityService
    ) { }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(data => {
      this.cities = data;
    });
  }
}
