import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItem = [
    { icon: 'bi-newspaper', label: 'My News Feed' },
    { icon: 'bi-people', label: 'Friends' },
    { icon: 'bi-chat-square-text', label: 'Messages' },
    { icon: 'bi-images', label: 'Images' },
  ];
}
