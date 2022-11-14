import { Component, OnInit } from '@angular/core';
import { myApps } from '../../data-access/apps';
import { AppInterface } from '../../data-access/interfaces/app.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  myApps: AppInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.myApps = myApps
  }

}
