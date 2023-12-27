import { Component } from '@angular/core';
import { FriendCard } from 'src/app/models/friendCard';
import { FriendService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-checkmyfriend',
  templateUrl: './checkmyfriend.component.html',
  styleUrls: ['./checkmyfriend.component.scss'],
})
export class CheckmyfriendComponent {
  constructor(private friendsrv: FriendService) {}
  friends: FriendCard[] = [];
  ngOnInit() {
    this.friendsrv.getAll().subscribe((res: any) => {
      this.friends = res.friendscard;
      console.log('res', res);
    });
  }
}
