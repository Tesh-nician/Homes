import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">
      </app-housing-location>
    </section>`,
  styleUrls: ['./homes.component.css'],


})
export class HomesComponent {
housingLocationList: HousingLocation[] = []
housingService: HousingService=inject(HousingService);
constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations(); 
}
}
