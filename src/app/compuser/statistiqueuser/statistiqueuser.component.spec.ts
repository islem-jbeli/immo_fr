import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueuserComponent } from './statistiqueuser.component';

describe('StatistiqueuserComponent', () => {
  let component: StatistiqueuserComponent;
  let fixture: ComponentFixture<StatistiqueuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiqueuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiqueuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
