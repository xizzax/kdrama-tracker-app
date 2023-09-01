import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistShowCardComponent } from './watchlist-show-card.component';

describe('WatchlistShowCardComponent', () => {
  let component: WatchlistShowCardComponent;
  let fixture: ComponentFixture<WatchlistShowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistShowCardComponent]
    });
    fixture = TestBed.createComponent(WatchlistShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
