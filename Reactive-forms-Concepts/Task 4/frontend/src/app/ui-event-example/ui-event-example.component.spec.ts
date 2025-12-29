import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEventExampleComponent } from './ui-event-example.component';

describe('UiEventExampleComponent', () => {
  let component: UiEventExampleComponent;
  let fixture: ComponentFixture<UiEventExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiEventExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiEventExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
