import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderAnnoncesComponent } from './valider-annonces.component';

describe('ValiderAnnoncesComponent', () => {
  let component: ValiderAnnoncesComponent;
  let fixture: ComponentFixture<ValiderAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiderAnnoncesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
