import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetformComponent } from './betform.component';

describe('BetformComponent', () => {
  let component: BetformComponent;
  let fixture: ComponentFixture<BetformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
