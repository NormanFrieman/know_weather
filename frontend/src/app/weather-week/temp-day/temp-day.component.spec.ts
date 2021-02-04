import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDayComponent } from './temp-day.component';

describe('TempDayComponent', () => {
  let component: TempDayComponent;
  let fixture: ComponentFixture<TempDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
