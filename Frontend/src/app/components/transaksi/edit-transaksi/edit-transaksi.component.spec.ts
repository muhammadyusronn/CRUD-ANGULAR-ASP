import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransaksiComponent } from './edit-transaksi.component';

describe('EditTransaksiComponent', () => {
  let component: EditTransaksiComponent;
  let fixture: ComponentFixture<EditTransaksiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTransaksiComponent]
    });
    fixture = TestBed.createComponent(EditTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
