import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesDashboardComponent } from './statistiques-dashboard.component';

describe('StatistiquesDashboardComponent', () => {
  let component: StatistiquesDashboardComponent;
  let fixture: ComponentFixture<StatistiquesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiquesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
