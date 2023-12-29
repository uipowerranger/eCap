import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timelinefollow',
  templateUrl: './timelinefollow.component.html',
  styleUrls: ['./timelinefollow.component.scss'],
})
export class TimelinefollowComponent {
  @Input() friend: any;
}
