import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  result = '';
  loginorregister(str: string) {
    this.result = str;
  }
  receveFromChild($event: any) {
    this.result = $event;
  }
}
