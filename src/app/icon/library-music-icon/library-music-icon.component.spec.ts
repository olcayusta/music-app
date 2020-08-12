import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMusicIconComponent } from './library-music-icon.component';

describe('LibraryMusicIconComponent', () => {
  let component: LibraryMusicIconComponent;
  let fixture: ComponentFixture<LibraryMusicIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryMusicIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMusicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
