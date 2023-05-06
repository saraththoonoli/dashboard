import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatjsComponent } from './chatjs.component';

describe('ChatjsComponent', () => {
  let component: ChatjsComponent;
  let fixture: ComponentFixture<ChatjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
