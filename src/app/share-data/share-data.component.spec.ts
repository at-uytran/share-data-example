import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataComponent } from './share-data.component';

describe('ShareDataComponent', () => {
  let component: ShareDataComponent;
  let fixture: ComponentFixture<ShareDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
