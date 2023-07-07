import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJenistransaksiComponent } from './add-jenistransaksi.component';

describe('AddJenistransaksiComponent', () => {
  let component: AddJenistransaksiComponent;
  let fixture: ComponentFixture<AddJenistransaksiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJenistransaksiComponent]
    });
    fixture = TestBed.createComponent(AddJenistransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
