import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPropriComponent } from './login-propri.component';

describe('LoginPropriComponent', () => {
  let component: LoginPropriComponent;
  let fixture: ComponentFixture<LoginPropriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPropriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPropriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
