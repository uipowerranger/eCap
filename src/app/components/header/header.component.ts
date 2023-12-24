import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
  ngOnInit(): void {}
}
