import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinmaxLimitComponent } from './minmax-limit.component';

describe('MinmaxLimitComponent', () => {
  let component: MinmaxLimitComponent;
  let fixture: ComponentFixture<MinmaxLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinmaxLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinmaxLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
