import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseIconComponent } from './pause-icon.component';

describe('PauseIconComponent', () => {
  let component: PauseIconComponent;
  let fixture: ComponentFixture<PauseIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauseIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
