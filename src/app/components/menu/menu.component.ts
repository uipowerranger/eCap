import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() childEvent = new EventEmitter();
  menuItem = [
    { icon: 'bi-newspaper', label: 'My News Feed', route: 'My News Feed' },
    { icon: 'bi-people', label: 'Friends', route: 'Friends' },
    { icon: 'bi-chat-square-text', label: 'Messages', route: 'Messages' },
    { icon: 'bi-images', label: 'Images', route: 'Images' },
  ];
  displayContent(menu: any) {
    this.childEvent.emit(menu);
  }
}
