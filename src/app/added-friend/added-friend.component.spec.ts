import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedFriendComponent } from './added-friend.component';

describe('AddedFriendComponent', () => {
  let component: AddedFriendComponent;
  let fixture: ComponentFixture<AddedFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
