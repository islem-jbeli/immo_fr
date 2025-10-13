import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerPhotoComponent } from './changer-photo.component';

describe('ChangerPhotoComponent', () => {
  let component: ChangerPhotoComponent;
  let fixture: ComponentFixture<ChangerPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangerPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
