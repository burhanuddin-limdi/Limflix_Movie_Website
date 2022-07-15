import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContDetailComponent } from './cont-detail.component';

describe('ContDetailComponent', () => {
  let component: ContDetailComponent;
  let fixture: ComponentFixture<ContDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
