import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-followfriend',
  templateUrl: './followfriend.component.html',
  styleUrls: ['./followfriend.component.scss'],
})
export class FollowfriendComponent {
  @Input() friend: any;
}
