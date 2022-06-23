import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdApp1Component } from './jd-app1.component';

describe('JdApp1Component', () => {
  let component: JdApp1Component;
  let fixture: ComponentFixture<JdApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdApp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JdApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
