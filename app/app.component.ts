//our root app component
import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'my-app',
  template: `
    <my-tabs>
      <my-tab [tabTitle]="'Tab 1'">
        Tab 1 content
      </my-tab>
      <my-tab tabTitle="Tab 2">
        Tab 2 content
      </my-tab>
    </my-tabs>
  `
})
export class AppComponent {
}
