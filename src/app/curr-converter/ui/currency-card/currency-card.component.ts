import { Component, OnInit, Input } from '@angular/core';
import { DumbComponent } from 'src/app/shared/data-access/classes/dumb-component.class';
import { CurrencyForCard } from '../../data-access/services/currency-models';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent extends DumbComponent {

  @Input('currencies') currenciesProps!: CurrencyForCard[];

  constructor() { super() }

}


