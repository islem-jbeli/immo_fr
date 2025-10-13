import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesMessagesComponent } from './mes-messages.component';

describe('MesMessagesComponent', () => {
  let component: MesMessagesComponent;
  let fixture: ComponentFixture<MesMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
