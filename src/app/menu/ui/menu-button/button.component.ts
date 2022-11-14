import { Component, OnInit, Input } from '@angular/core';
import { AppInterface } from '../../data-access/interfaces/app.interface';

@Component({
  selector: 'app-menu-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input('app') appProps!: AppInterface;

  constructor() { }

  ngOnInit(): void {

  }

}
