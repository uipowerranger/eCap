import { Component } from '@angular/core';

@Component({
  selector: 'app-sutinfo',
  templateUrl: './sutinfo.component.html',
  styleUrls: ['./sutinfo.component.scss'],
})
export class SutinfoComponent {
  products: any;
  ngOnInit() {
    this.products = [
      {
        name: 'TurinMS10',
        availability: 'Free',
      },
      {
        name: 'PENANG-HUAMBO-4944',
        availability: 'Busy',
      },
      {
        name: 'volcano-ea97-SUMISAHA',
        availability: 'Free',
      },

      {
        name: 'huambo-3894-sut',
        availability: 'Busy',
      },
      {
        name: 'runnerX5',
        availability: 'Free',
      },
    ];
  }
  getSeverioty(availability: string) {
    return availability === 'Free' ? 'warn' : 'success';
  }
}
