import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycateringComponent } from './mycatering.component';

describe('MycateringComponent', () => {
  let component: MycateringComponent;
  let fixture: ComponentFixture<MycateringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycateringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
