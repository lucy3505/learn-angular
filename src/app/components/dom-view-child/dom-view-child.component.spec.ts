import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomViewChildComponent } from './dom-view-child.component';

describe('DomViewChildComponent', () => {
  let component: DomViewChildComponent;
  let fixture: ComponentFixture<DomViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
