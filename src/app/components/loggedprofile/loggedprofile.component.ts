import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loggedprofile',
  templateUrl: './loggedprofile.component.html',
  styleUrls: ['./loggedprofile.component.scss'],
})
export class LoggedprofileComponent {
  @Input() friend: any;
  @Input() user: any;
}
