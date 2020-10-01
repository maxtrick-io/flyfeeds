import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyfeedsComponent } from './flyfeeds.component';

describe('FlyfeedsComponent', () => {
  let component: FlyfeedsComponent;
  let fixture: ComponentFixture<FlyfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
