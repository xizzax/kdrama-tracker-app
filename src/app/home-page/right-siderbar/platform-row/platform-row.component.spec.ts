import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformRowComponent } from './platform-row.component';

describe('PlatformRowComponent', () => {
  let component: PlatformRowComponent;
  let fixture: ComponentFixture<PlatformRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformRowComponent]
    });
    fixture = TestBed.createComponent(PlatformRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
