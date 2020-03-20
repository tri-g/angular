import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesiteComponent } from './samplesite.component';

describe('SamplesiteComponent', () => {
  let component: SamplesiteComponent;
  let fixture: ComponentFixture<SamplesiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
