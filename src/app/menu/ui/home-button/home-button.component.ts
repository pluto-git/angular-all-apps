
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-home-button',
  templateUrl: './home-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonComponent {

  @Input('route') routeProps: string | '/' = '/';
  @Input('tooltip') matTooltipProps: string | 'go to home page' = 'go to home page';
  @Input ('classes') classListProps?: string
  constructor() { }


}
