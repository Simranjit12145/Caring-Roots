import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'caring-roots-country-select',
  standalone: true,
  imports: [SelectModule, FormsModule],
  templateUrl: './country-select.component.html',
  styleUrl: './country-select.component.scss'
})
export class CountrySelectComponent implements OnInit {
  countries: any[] | undefined;
  selectedCountry: string | undefined;
  ngOnInit() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },   
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];
    this.selectedCountry = this.countries.find(c => c.code === 'US');
  }
}
