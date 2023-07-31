import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoupComponent } from './logoup.component';

describe('LogoupComponent', () => {
  let component: LogoupComponent;
  let fixture: ComponentFixture<LogoupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoupComponent]
    });
    fixture = TestBed.createComponent(LogoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
