import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPersoComponent } from './dashboard-perso.component';

describe('DashboardPersoComponent', () => {
  let component: DashboardPersoComponent;
  let fixture: ComponentFixture<DashboardPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPersoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
