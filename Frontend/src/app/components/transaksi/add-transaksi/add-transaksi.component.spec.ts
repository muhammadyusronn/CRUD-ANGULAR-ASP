import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransaksiComponent } from './add-transaksi.component';

describe('AddTransaksiComponent', () => {
  let component: AddTransaksiComponent;
  let fixture: ComponentFixture<AddTransaksiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTransaksiComponent]
    });
    fixture = TestBed.createComponent(AddTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
