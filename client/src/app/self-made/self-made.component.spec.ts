import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfMadeComponent } from './self-made.component';

describe('SelfMadeComponent', () => {
  let component: SelfMadeComponent;
  let fixture: ComponentFixture<SelfMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
