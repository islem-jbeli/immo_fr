import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisuserComponent } from './favorisuser.component';

describe('FavorisuserComponent', () => {
  let component: FavorisuserComponent;
  let fixture: ComponentFixture<FavorisuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavorisuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorisuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
