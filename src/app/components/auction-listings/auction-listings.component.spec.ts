import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionListingsComponent } from './auction-listings.component';

describe('AuctionListingsComponent', () => {
  let component: AuctionListingsComponent;
  let fixture: ComponentFixture<AuctionListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
