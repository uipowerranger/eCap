import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friendcard',
  templateUrl: './friendcard.component.html',
  styleUrls: ['./friendcard.component.scss'],
})
export class FriendCard {
  @Input() friend: any;
  ngOnInit() {
    console.log('Friend', this.friend);
  }
}
