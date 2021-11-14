import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishListItemComponent } from './whish-list-item.component';

describe('WhishListItemComponent', () => {
  let component: WhishListItemComponent;
  let fixture: ComponentFixture<WhishListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
