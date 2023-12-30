import { Component } from '@angular/core';
import { FriendCard } from 'src/app/models/friendCard';
import { AccountService } from 'src/app/services';
import { FriendService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-checkmyfriend',
  templateUrl: './checkmyfriend.component.html',
  styleUrls: ['./checkmyfriend.component.scss'],
})
export class CheckmyfriendComponent {
  user: any;
  display: string;
  constructor(
    private friendsrv: FriendService,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }
  friends: FriendCard[] = [];
  ngOnInit() {
    this.friendsrv.getAll().subscribe((res: any) => {
      this.friends = res.friendscard;
      console.log('res', res);
    });
  }
  receveFromChild($event: any) {
    this.display = $event;
  }
  ngDestroy() {}
}
