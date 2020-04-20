import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchRecordsComponent } from './fetch-records.component';

describe('FetchRecordsComponent', () => {
  let component: FetchRecordsComponent;
  let fixture: ComponentFixture<FetchRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
