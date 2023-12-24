import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-tws-table',
  templateUrl: './tws-table.component.html',
  styleUrls: ['./tws-table.component.scss'],
})
export class TwsTableComponent {
  user?: User | null;
  countries: any[] | undefined;

  formGroup: FormGroup | undefined;

  filteredCountries: any[] | undefined;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }
  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
