import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSiderbarComponent } from './right-siderbar.component';

describe('RightSiderbarComponent', () => {
  let component: RightSiderbarComponent;
  let fixture: ComponentFixture<RightSiderbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSiderbarComponent]
    });
    fixture = TestBed.createComponent(RightSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
