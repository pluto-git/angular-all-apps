import { Component, Input } from '@angular/core';
import { AppInterface } from '../../data-access/interfaces/app.interface';

@Component({
  selector: 'app-menu-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent {

  @Input('app') appProps!: AppInterface;

  constructor() { }

}
