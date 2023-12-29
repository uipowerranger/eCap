import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-timelineheader',
  templateUrl: './timelineheader.component.html',
  styleUrls: ['./timelineheader.component.scss'],
})
export class TimelineheaderComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
      },
      {
        label: 'Edit',
      },
      {
        label: 'Users',
      },
      {
        label: 'Events',
      },
      {
        label: 'Quit',
      },
    ];
  }
}
