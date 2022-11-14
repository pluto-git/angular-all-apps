import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrConverterShellComponent } from './curr-converter-shell.component';

describe('CurrConverterShellComponent', () => {
  let component: CurrConverterShellComponent;
  let fixture: ComponentFixture<CurrConverterShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrConverterShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrConverterShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
