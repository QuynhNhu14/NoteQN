import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'noteee-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <noteee-analog-welcome/>
  `,
})
export default class HomeComponent {
}
