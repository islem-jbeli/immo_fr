import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesuserComponent } from './messagesuser.component';

describe('MessagesuserComponent', () => {
  let component: MessagesuserComponent;
  let fixture: ComponentFixture<MessagesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
