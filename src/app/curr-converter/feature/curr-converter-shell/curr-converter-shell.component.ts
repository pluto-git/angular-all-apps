import { Component, OnInit } from '@angular/core';
import { AppThemes, ThemeService } from '../../data-access/services/theme.service';
import { Observable, Subject, map, startWith, timer, retry, switchMap, share, takeUntil } from 'rxjs';
import { CurrencyAPIService } from '../../data-access/services/currency-api.service';
import { CurrencyConverterService } from '../../data-access/services/currency-converter.service';
import { CurrencyForCard, CurrencyRate } from '../../data-access/services/currency-models';

@Component({
  selector: 'app-curr-converter-shell',
  templateUrl: './curr-converter-shell.component.html',
  styleUrls: ['./curr-converter-shell.component.scss']
})
export class CurrConverterShellComponent implements OnInit {

  private lsKey: string = "Currencies";
  currentTheme$!: Observable<string>;
  appThemes = AppThemes;
  navbarCurrencies!: CurrencyForCard[];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private themeService: ThemeService,
    private apiSvc: CurrencyAPIService, private curConvSvc: CurrencyConverterService) { }

  ngOnInit(): void {
    //themes
    this.themeService.getTheme();
    this.currentTheme$ = this.themeService.currentTheme$

    //
    this.curConvSvc.currencyRates = JSON.parse(localStorage.getItem(this.lsKey)!) || {};

    if (this.curConvSvc.isEmptyObject(this.curConvSvc.currencyRates) ||
      (this.curConvSvc.currencyRates.hasOwnProperty('retrievalTimestamp') &&
        Date.now() > this.curConvSvc.currencyRates.retrievalTimestamp! + 3600 * 1000)) {
      this.getCurrencies();
    } else {
      this.curConvSvc.getActualEuroAndUSD();
      this.navbarCurrencies = this.curConvSvc.navbarCurrencies;
    }
  }

  setTheme(theme: AppThemes): void {
    this.themeService.setTheme(theme)
  }


  //call to our API
  private getCurrencies(): void {

    const startDelayMs = (60 - new Date().getMinutes()) * 60 * 1000;
    const hourMs = 60 * 60 * 1000;

    timer(startDelayMs, hourMs).pipe(
      startWith(0),
      switchMap(() => this.apiSvc.getLiveCurrencies()),
      map(currencies => {
        return { ...currencies, retrievalTimestamp: Date.now() }
      }),
      retry(2),
      share(),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data: CurrencyRate) => {
        console.log(data);
        //the api has a miniscule amount of calls for free.
        //and let's store it in ls for simplicity
        //and limit calls it with our retrieval timestamp.

        localStorage.setItem(this.lsKey, JSON.stringify(data));

        this.curConvSvc.currencyRates = data;
        this.curConvSvc.getActualEuroAndUSD();
        this.navbarCurrencies = this.curConvSvc.navbarCurrencies;

      },
      error: (err: Error) => console.error(err)
    });

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
