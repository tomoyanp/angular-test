import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadjetComponent } from './gadjet.component';

describe('GadjetComponent', () => {
  let component: GadjetComponent;
  let fixture: ComponentFixture<GadjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
