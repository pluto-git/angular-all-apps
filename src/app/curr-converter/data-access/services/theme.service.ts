import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export enum AppThemes {
  light = "light",
  dark = "dark"
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private lsKey: string = 'theme';

  private _currentTheme$ = new BehaviorSubject<string>(AppThemes.light);
  currentTheme$ = this._currentTheme$.asObservable(); //to use 'async' pipe and to not expose our subject.

  setTheme(theme: string): void {
    this._currentTheme$.next(theme);
    localStorage.setItem(this.lsKey, theme);
  }

  getTheme(): void {
    const defaultTheme = localStorage.getItem(this.lsKey) || '';
    if (defaultTheme === '') return;
    this.setTheme(defaultTheme);
  }

}
