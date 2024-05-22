import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTest2Component } from './header-test-2.component';

describe('HeaderTest2Component', () => {
  let component: HeaderTest2Component;
  let fixture: ComponentFixture<HeaderTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTest2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
