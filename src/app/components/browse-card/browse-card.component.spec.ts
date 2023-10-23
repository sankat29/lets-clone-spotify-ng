import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCardComponent } from './browse-card.component';

describe('BrowseCardComponent', () => {
  let component: BrowseCardComponent;
  let fixture: ComponentFixture<BrowseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
