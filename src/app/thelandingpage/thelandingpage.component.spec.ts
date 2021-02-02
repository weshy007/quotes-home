import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelandingpageComponent } from './thelandingpage.component';

describe('ThelandingpageComponent', () => {
  let component: ThelandingpageComponent;
  let fixture: ComponentFixture<ThelandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThelandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThelandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
