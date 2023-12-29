import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AccountService } from 'src/app/services';
import { PostService } from 'src/app/services/pos.services';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  user: any;
  constructor(
    private postsrv: PostService,
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  // constructor(private postsrv: PostService) {}
  posts!: Post[];
  friends = [
    { title: 'Raja', comment: 'Posted a photo', time: '5 mins ago' },
    { title: 'Bhanu', comment: 'Posted a photo', time: 'Yesterday' },
    { title: 'Sarah', comment: 'commented on a photo', time: '3days ago' },
  ];
  ngOnInit() {
    this.postsrv.getAll().subscribe((res: any) => {
      this.posts = res.posts;
      console.log('res', res);
    });
  }
  receveFromChild($event: any) {
    let newComment = $event;
    this.posts.push({
      comment: newComment,
      day: 'today',
      dislikes: 2,
      id: 1,
      likes: 1,
      time: '3.40pm',
      username: 'vani',
    });
  }
}
