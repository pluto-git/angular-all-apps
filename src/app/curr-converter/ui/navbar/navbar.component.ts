import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DumbComponent } from 'src/app/shared/data-access/classes/dumb-component.class';
import { CurrencyForCard } from '../../data-access/services/currency-models';
import { AppThemes } from '../../data-access/services/theme.service';

@Component({
  selector: 'app-curr-converter-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends DumbComponent {

  logoName = "Awesome Converter";
  appThemes = AppThemes;

  @Input('currencies') currenciesProps!: CurrencyForCard[];
  @Output('setTheme') setThemeEvent: EventEmitter<AppThemes> = new EventEmitter();

  constructor(){
    super();
  }

  setTheme(theme: AppThemes): void {
    this.setThemeEvent.emit(theme);
  }



}
