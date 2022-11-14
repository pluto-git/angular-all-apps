import { Component, OnInit } from '@angular/core';
import { DumbComponent } from 'src/app/shared/data-access/classes/dumb-component.class';

@Component({
  selector: 'app-curr-converter-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss']
})
export class FootbarComponent extends DumbComponent {

  footerText = "Awesome Converter, Inc."

  constructor() { super() }


}
