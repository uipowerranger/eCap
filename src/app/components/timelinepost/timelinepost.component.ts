import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-timelinepost',
  templateUrl: './timelinepost.component.html',
  styleUrls: ['./timelinepost.component.scss'],
})
export class TimelinepostComponent {
  @Input() posts: any;
}
