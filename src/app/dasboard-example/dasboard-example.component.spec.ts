import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardExampleComponent } from './dasboard-example.component';

describe('DasboardExampleComponent', () => {
  let component: DasboardExampleComponent;
  let fixture: ComponentFixture<DasboardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
