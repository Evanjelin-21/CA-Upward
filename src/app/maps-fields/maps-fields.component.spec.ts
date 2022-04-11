import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsFieldsComponent } from './maps-fields.component';

describe('MapsFieldsComponent', () => {
  let component: MapsFieldsComponent;
  let fixture: ComponentFixture<MapsFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
