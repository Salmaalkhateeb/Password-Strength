import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassowordStrengthBarComponent } from './password-strength.component';

describe('PassowordStrengthBarComponent', () => {
  let component: PassowordStrengthBarComponent;
  let fixture: ComponentFixture<PassowordStrengthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassowordStrengthBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassowordStrengthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
