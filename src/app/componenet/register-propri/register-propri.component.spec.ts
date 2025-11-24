import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPropriComponent } from './register-propri.component';

describe('RegisterPropriComponent', () => {
  let component: RegisterPropriComponent;
  let fixture: ComponentFixture<RegisterPropriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPropriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPropriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
