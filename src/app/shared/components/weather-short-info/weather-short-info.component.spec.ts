import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherShortInfoComponent } from './weather-short-info.component';

describe('WeatherShortInfoComponent', () => {
  let component: WeatherShortInfoComponent;
  let fixture: ComponentFixture<WeatherShortInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherShortInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
