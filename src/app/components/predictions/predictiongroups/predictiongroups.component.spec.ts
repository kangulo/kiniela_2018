import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiongroupsComponent } from './predictiongroups.component';

describe('PredictiongroupsComponent', () => {
  let component: PredictiongroupsComponent;
  let fixture: ComponentFixture<PredictiongroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictiongroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictiongroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
