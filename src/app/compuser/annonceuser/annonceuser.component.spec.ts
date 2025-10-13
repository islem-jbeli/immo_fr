import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceuserComponent } from './annonceuser.component';

describe('AnnonceuserComponent', () => {
  let component: AnnonceuserComponent;
  let fixture: ComponentFixture<AnnonceuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnonceuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
