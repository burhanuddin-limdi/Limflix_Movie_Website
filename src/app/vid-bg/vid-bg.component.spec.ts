import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidBgComponent } from './vid-bg.component';

describe('VidBgComponent', () => {
  let component: VidBgComponent;
  let fixture: ComponentFixture<VidBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
