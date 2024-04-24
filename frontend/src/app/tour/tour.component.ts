import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../APIservices/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  @Input() cityId!: number;
  tours: any[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    if (this.cityId) {
      this.tourService.getToursByCity(this.cityId).subscribe(
        (data) => {
          this.tours = data;
        },
        (error) => {
          console.error('Error fetching tours', error);
        }
      );
    }
  }
}
