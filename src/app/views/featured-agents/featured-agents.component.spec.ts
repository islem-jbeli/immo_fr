import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAgentsComponent } from './featured-agents.component';

describe('FeaturedAgentsComponent', () => {
  let component: FeaturedAgentsComponent;
  let fixture: ComponentFixture<FeaturedAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedAgentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
