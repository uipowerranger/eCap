import { Component } from '@angular/core';
import { FriendService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent {
  friends: any;
  constructor(private friendsrv: FriendService) {}
  ngOnInit() {
    this.friendsrv.getAll().subscribe((res: any) => {
      this.friends = res.friendscard;
      console.log('res', res);
    });
  }
}
