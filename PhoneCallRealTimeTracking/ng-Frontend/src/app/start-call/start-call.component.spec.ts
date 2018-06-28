import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCallComponent } from './start-call.component';

describe('StartCallComponent', () => {
  let component: StartCallComponent;
  let fixture: ComponentFixture<StartCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
