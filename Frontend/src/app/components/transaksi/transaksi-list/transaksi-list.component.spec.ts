import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiListComponent } from './transaksi-list.component';

describe('TransaksiListComponent', () => {
  let component: TransaksiListComponent;
  let fixture: ComponentFixture<TransaksiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaksiListComponent]
    });
    fixture = TestBed.createComponent(TransaksiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
